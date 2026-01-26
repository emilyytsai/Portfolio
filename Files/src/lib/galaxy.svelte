<script lang="ts">
  import { onMount } from 'svelte';
  import { Renderer, Program, Mesh, Triangle } from 'ogl';

  export let focal: [number, number] = [0.5, 0.5];
  export let rotation: [number, number] = [1.0, 0.0];
  export let starSpeed = 0.5;
  export let density = 1;
  export let hueShift = 140;
  export let disableAnimation = false;
  export let speed = 1.0;
  export let mouseInteraction = true;
  export let glowIntensity = 0.3;
  export let saturation = 0.0;
  export let mouseRepulsion = true;
  export let repulsionStrength = 2;
  export let twinkleIntensity = 0.3;
  export let rotationSpeed = 0.1;
  export let autoCenterRepulsion = 0;
  export let transparent = true;

  let container: HTMLDivElement;
  let renderer: Renderer;
  let program: Program;
  let mesh: Mesh;
  let animateId: number;

  let targetMouse = { x: 0.5, y: 0.5 };
  let smoothMouse = { x: 0.5, y: 0.5 };
  let targetActive = 0.0;
  let smoothActive = 0.0;

  const vertexShader = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;

    uniform float uTime;
    uniform vec3 uResolution;
    uniform vec2 uFocal;
    uniform vec2 uRotation;
    uniform float uStarSpeed;
    uniform float uDensity;
    uniform float uHueShift;
    uniform float uSpeed;
    uniform vec2 uMouse;
    uniform float uGlowIntensity;
    uniform float uSaturation;
    uniform bool uMouseRepulsion;
    uniform float uTwinkleIntensity;
    uniform float uRotationSpeed;
    uniform float uRepulsionStrength;
    uniform float uMouseActiveFactor;
    uniform float uAutoCenterRepulsion;
    uniform bool uTransparent;

    varying vec2 vUv;

    #define NUM_LAYER 4.0
    #define STAR_COLOR_CUTOFF 0.2
    #define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
    #define PERIOD 3.0

    float Hash21(vec2 p){
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float tri(float x){
      return abs(fract(x)*2.0 - 1.0);
    }

    float tris(float x){
      float t = fract(x);
      return 1.0 - smoothstep(0.0, 1.0, abs(2.0*t - 1.0));
    }

    float trisn(float x){
      float t = fract(x);
      return 2.0*(1.0 - smoothstep(0.0, 1.0, abs(2.0*t - 1.0))) - 1.0;
    }

    vec3 hsv2rgb(vec3 c){
      vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float Star(vec2 uv, float flare){
      float d = length(uv);
      float m = (0.05 * uGlowIntensity) / (d + 0.001);
      float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x*uv.y*1000.0));
      m += rays * flare * uGlowIntensity;
      uv *= MAT45;
      rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x*uv.y*1000.0));
      m += rays * 0.3 * flare * uGlowIntensity;
      m *= smoothstep(1.0, 0.2, d);
      return m;
    }

    vec3 StarLayer(vec2 uv){
      vec3 col = vec3(0.0);
      vec2 gv = fract(uv) - 0.5;
      vec2 id = floor(uv);

      for(int y=-1; y<=1; y++){
        for(int x=-1; x<=1; x++){
          vec2 offset = vec2(float(x), float(y));
          vec2 si = id + offset;

          float seed = Hash21(si);
          float size = fract(seed * 345.32) * 0.8;
          float flareSize = smoothstep(0.9, 1.0, size)
              * tri(uStarSpeed / (PERIOD*seed + 1.0));

          float red = smoothstep(STAR_COLOR_CUTOFF,1.0,Hash21(si+1.0)) + STAR_COLOR_CUTOFF;
          float blu = smoothstep(STAR_COLOR_CUTOFF,1.0,Hash21(si+3.0)) + STAR_COLOR_CUTOFF;
          float grn = min(red, blu) * seed;
          vec3 base = vec3(red, grn, blu);

          float hue = atan(base.g - base.r, base.b - base.r)/(2.0*3.14159) + 0.5;
          hue = fract(hue + uHueShift/360.0);
          float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
          float val = max(max(base.r, base.g), base.b);
          base = hsv2rgb(vec3(hue, sat, val));

          vec2 pad = vec2(
            tris(seed*34.0 + uTime*uSpeed/10.0),
            tris(seed*38.0 + uTime*uSpeed/30.0)
          ) - 0.5;

          float star = Star(gv - offset - pad, flareSize);
          float twinkle = trisn(uTime*uSpeed + seed*6.2831)*0.5 + 1.0;
          twinkle = mix(1.0, twinkle, uTwinkleIntensity);
          star *= twinkle;

          col += star * size * base;
        }
      }

      return col;
    }

    void main(){

    vec2 uv = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

    if(uMouseRepulsion){
        vec2 mouseUV = (uMouse - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
        vec2 diff = uv - mouseUV;
        float dist = length(diff);
        uv += normalize(diff) * uRepulsionStrength * 0.05 * uMouseActiveFactor / (dist + 0.01);
    }

    float a = uTime * uRotationSpeed;
    mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    uv = rot * uv;
    uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

    vec3 col = vec3(0.0);
    float totalGlow = 0.0;

    for(float i=0.0; i<1.0; i+=1.0/NUM_LAYER){
        float depth = fract(i + uStarSpeed * uSpeed);
        float scale = mix(15.0*uDensity, 0.5*uDensity, depth);
        float fade = depth * smoothstep(1.0, 0.9, depth);

        vec3 starCol = StarLayer(uv * scale + i*453.32) * fade;

        // accumulate color additively
        col += starCol;

        // optional: track max brightness for alpha scaling
        totalGlow += max(starCol.r, max(starCol.g, starCol.b));
    }

    float alpha = clamp(totalGlow * uGlowIntensity, 0.0, 1.0);

    gl_FragColor = vec4(col, alpha);
    }
  `;

  const lerp = (a:number,b:number,f:number)=>a+(b-a)*f;

  onMount(() => {
    renderer = new Renderer({ alpha: transparent, premultipliedAlpha: false });
    const gl = renderer.gl;

    transparent
      ? (gl.enable(gl.BLEND), gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA), gl.clearColor(0,0,0,0))
      : gl.clearColor(0,0,0,1);

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1,1,1] },
        uFocal: { value: focal },
        uRotation: { value: rotation },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uSpeed: { value: speed },
        uMouse: { value: [0.5,0.5] },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uMouseRepulsion: { value: mouseRepulsion },
        uTwinkleIntensity: { value: twinkleIntensity },
        uRotationSpeed: { value: rotationSpeed },
        uRepulsionStrength: { value: repulsionStrength },
        uMouseActiveFactor: { value: 0 },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uTransparent: { value: transparent }
      }
    });

    mesh = new Mesh(gl,{ geometry, program });
    container.appendChild(gl.canvas);

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      program.uniforms.uResolution.value = [
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      ];
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = (t:number) => {
      animateId = requestAnimationFrame(animate);
      if(!disableAnimation){
        program.uniforms.uTime.value = t * 0.001;
        program.uniforms.uStarSpeed.value = (t * 0.001 * starSpeed) / 10.0;
      }

      smoothMouse.x = lerp(smoothMouse.x, targetMouse.x, 0.05);
      smoothMouse.y = lerp(smoothMouse.y, targetMouse.y, 0.05);
      smoothActive = lerp(smoothActive, targetActive, 0.05);

      program.uniforms.uMouse.value = [smoothMouse.x, smoothMouse.y];
      program.uniforms.uMouseActiveFactor.value = smoothActive;

      renderer.render({ scene: mesh });
    };

    animateId = requestAnimationFrame(animate);

    const move = (e:MouseEvent)=>{
      const r = container.getBoundingClientRect();
      targetMouse = { x:(e.clientX-r.left)/r.width, y:1-(e.clientY-r.top)/r.height };
      targetActive = 1;
    };

    const leave = ()=>targetActive=0;

    if(mouseInteraction){
      container.addEventListener('mousemove', move);
      container.addEventListener('mouseleave', leave);
    }

    return ()=>{
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if(mouseInteraction){
        container.removeEventListener('mousemove', move);
        container.removeEventListener('mouseleave', leave);
      }
      container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  });
</script>

<div bind:this={container} class="galaxy-container"></div>

<style>
  .galaxy-container {
    position: absolute;
    inset: 0;
    z-index: 5;
  }
  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
