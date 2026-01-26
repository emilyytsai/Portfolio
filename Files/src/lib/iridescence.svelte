<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';

  export let color: [number, number, number] = [1, 1, 1];
  export let speed = 1.0;
  export let amplitude = 0.1;

  let container: HTMLDivElement;
  let loaded = false;

  const vertexShader = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0, 1);
    }
  `;

  const fragmentShader = `
    precision highp float;

    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uResolution;

    varying vec2 vUv;

    void main() {
      float mr = min(uResolution.x, uResolution.y);
      vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

      float d = -uTime * 0.5 * ${speed};
      float a = 0.0;
      for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
      }
      d += uTime * 0.5 * ${speed};

      vec3 col = vec3(
        cos(uv * vec2(d, a)) * 0.6 + 0.4,
        cos(a + d) * 0.5 + 0.5
      );

      col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  onMount(() => {
    if (!container) return;

    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(color[0], color[1], color[2], 1);

    let program: Program;
    let mesh: Mesh;
    let frameId: number;

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }

    const geometry = new Triangle(gl);

    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          )
        }
      }
    });

    mesh = new Mesh(gl, { geometry, program });

    function animate(t: number) {
      frameId = requestAnimationFrame(animate);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });

      if (!loaded) {
        loaded = true;
      }
    }

    resize();
    frameId = requestAnimationFrame(animate);
    container.appendChild(gl.canvas);

    window.addEventListener('resize', resize);

    onDestroy(() => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    });
  });
</script>

<div bind:this={container} class="iridescence-container {loaded ? 'visible' : ''}"></div>

<style>
  .iridescence-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background-color: rgb(30, 40, 60);
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  .iridescence-container.visible {
    opacity: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
