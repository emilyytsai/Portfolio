<script lang="ts">
  import { slide } from 'svelte/transition';
  import Aurora from '$lib/aurora.svelte';

  let showIntro = true;
  let mobileMenuOpen = false;

  setTimeout(() => {
    showIntro = false;
  }, 2000);
  
  function toggleMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  }

</script>

<svelte:head>
  <title>Emily Tsai · Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>
  
</svelte:head>

<!-- intro screen-->
{#if showIntro}
  <section
    class="fixed inset-0 bg-zinc-900 flex items-center justify-center z-50"
    out:slide={{ duration: 750 }}
  >

  <!-- animate.css -->
    <h1 class="font-outfit text-6xl font-medium text-white relative z-20 animate__animated animate__rubberBand">
      Emily Tsai
    </h1>

    <div class="fixed inset-0 z-0 pointer-events-none grid-bg"></div>

    <div class="absolute inset-0 z-10">
    <Aurora
      colorStops={['#E64561', '#A2A5A8', '#30011D']}
      amplitude={2}
      blend={10}
      speed={0.1}
    />
    </div>

    

  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main class="relative min-h-screen bg-zinc-900 text-white pt-28 flex flex-col items-center">
  
    <div class="fixed inset-0 z-0 pointer-events-none grid-bg"></div>

    <div class="fixed inset-0 z-10">
      <Aurora
        colorStops={['#E64561', '#A2A5A8', '#30011D']}
        amplitude={2}
        blend={10}
        speed={0.1}
      />
    </div>

<!-- navbar (desktop) -->
    <nav class="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-30">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="font-outfit text-3xl font-semibold">Emily Tsai</div>
        <ul class="hidden md:flex space-x-6 text-[1.375rem] font-outfit text-white">
          <li><a href="#home" class="hover:text-[#F095BE] transition">Home</a></li>
          <li><a href="#about" class="hover:text-[#F095BE] transition">About Me</a></li>
          <li><a href="#projects" class="hover:text-[#F095BE] transition">Projects</a></li>
          <li><a href="#contact" class="hover:text-[#F095BE] transition">Contact</a></li>
          <li><a href="#gallery" class="hover:text-[#F095BE] transition">Gallery</a></li>
        </ul>

<!-- side menu button (mobile) -->
      <button
      class="md:hidden relative w-7 h-7"
      on:click={toggleMenu}
      aria-label="Toggle menu"
      >
        <span class={`absolute left-0 w-7 h-0.5 bg-white transition-all duration-300
          ${mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>

        <span class={`absolute left-0 w-7 h-0.5 bg-white transition-all duration-300
          ${mobileMenuOpen ? 'opacity-0 top-3' : 'top-3'}`}></span>

        <span class={`absolute left-0 w-7 h-0.5 bg-white transition-all duration-300
          ${mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
      </button>

      </div>
    </nav>

{#if mobileMenuOpen}
  <div
    class="md:hidden fixed top-[72px] left-0 w-full bg-zinc-950/40 backdrop-blur-md z-40 flex flex-col items-center 
           py-8 space-y-6 text-xl font-outfit rounded-2xl border border-white/15 shadow-2xl"
    in:slide={{ duration: 200 }}
    out:slide={{ duration: 200 }}
  >
    <a href="#home" on:click={toggleMenu} class="hover:text-[#F095BE] transition">Home</a>
    <a href="#about" on:click={toggleMenu} class="hover:text-[#F095BE] transition">About Me</a>
    <a href="#projects" on:click={toggleMenu} class="hover:text-[#F095BE] transition">Projects</a>
    <a href="#contact" on:click={toggleMenu} class="hover:text-[#F095BE] transition">Contact</a>
    <a href="#gallery" on:click={toggleMenu} class="hover:text-[#F095BE] transition">Gallery</a>
  </div>
{/if}
  
<!-- home -->
  <section id="home" class="mx-auto w-full max-w-full sm:max-w-md lg:max-w-lg px-0 sm:px-0 sm:px-0 z-20 rounded-2xl
                            overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl">

    <div class="relative aspect-[4/3] sm:h-[360px] lg:h-[420px]">
      <img src="/emi-image2.jpg" alt="emi" class="absolute inset-0 w-full h-full object-cover"/>
    </div>

    <div class="font-outfit px-4 pt-6 space-y-8 text-white">
      <h2 class="text-4xl md:text-5xl font-bold text-center">
        Hello 🌎, I'm Emi!
      </h2>

  <pre class="text-[0.80rem] lg:text-[0.95rem] pb-2 overflow-x-auto rounded-lg">
<code><span class="text-blue-300">  const</span> emi = <span class="text-green-300">&#123;</span>
    aspirations: <span class="text-yellow-300">["Game Developer", "Software Engineer"]</span>,
    values: <span class="text-pink-300">["Perseverance", "Passion", "Patience"]</span>
<span class="text-green-400">   &#125;</span>;</code>
  </pre>

    </div>
  </section>

<!-- about -->
  <section id="about" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-1 sm:space-y-3 lg:space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center pt-6">About Me</h4>
    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
      I am a <u>Senior Computer Science student</u> at <u>California State University, Fullerton!</u><br><br>

      I currently serve as the <b>President</b> of CSUF's 
      <a href="https://vgdccsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #E64561;" class="hover:underline font-bold">Video Game Development Club (VGDC),</a>
      the <b>Co-Team Lead</b> for 
      <a href="https://acmcsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #E64561;" class="hover:underline font-bold">ACM Node Buds</a>,
      and <b>Officer</b> for 
      <a href="https://acmcsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #E64561;" class="hover:underline font-bold">ACM Open Source.</a>  
      Additionally, I am the <b>Social Media Coordinator</b> for the <b>Engineering & Computer Science Inter-Club Council</b>. <br><br>

      I also love attending hackathons! My first one was 
      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7318121147944841217/" target="_blank" rel="noopener noreferrer" style="color: #E64561;" class="hover:underline font-bold">FullyHacks 2025, where I won Best Game Project.</a>  
      I am passionate about game development and building projects that make an impact 💗
    </p>
  </section>

<!-- projects -->
  <section id="projects" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-1 sm:space-y-3 lg:space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center pb-6">Projects</h4>

    <div class="space-y-1">
      <div class="grid grid-cols-2 gap-2 mx-auto">
        <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-4.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-5.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      </div>
      <p class="text-base sm:text-lg lg:text-xl text-white text-center py-0">
        <u>Oddinary Farm</u><br>
        <a href="https://store.steampowered.com/app/3848990/Oddinary_Farm/" target="_blank" rel="noopener noreferrer" style="color: #9CE2FF;" class="hover:underline font-bold">Playtest out on Steam!</a><br>
        <i>Unity, GitHub, C#, Visual Studio Code</i><br>
        Engineered UI animation classes and oversaw development workflows and creative direction.<br><br>
      </p>
    </div>


    <div class="space-y-1">
      <div class="grid grid-cols-1 mx-auto max-w-xl justify-items-center">
        <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-7.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      </div>
      <p class="text-base sm:text-lg lg:text-xl text-white text-center py-0">
        <u>Evocation</u><br>
        <i>Unity, GitHub, C#, Visual Studio Code</i><br>
        Developed player input mechanics and UI elements and menus.<br>
        <a href="https://github.com/JesDaw/Evocation" target="_blank" rel="noopener noreferrer" style="color: #85969E;" class="hover:underline font-bold">GitHub Repo</a><br><br>
      </p>
    </div>


    <div class="space-y-1">
      <div class="grid grid-cols-2 gap-2 mx-auto">
        <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-2.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-3.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      </div>
      <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
        <u>Country Life Cafe</u><br>
        <i>Unity, GitHub, C#, Visual Studio Code</i><br>
        Led a team of developers, created main gameplay loops, UI systems, implemented procederal 
        difficulty scaling, and managed asset creation and integration.<br>
        <a href="https://github.com/emilyytsai/CountryLifeCafe" target="_blank" rel="noopener noreferrer" style="color: #85969E;" class="hover:underline font-bold">GitHub Repo</a><br><br>
      </p>
    </div>


    <div class="space-y-1">
      <div class="grid grid-cols-1 mx-auto max-w-xl justify-items-center">
        <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-1.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      </div>
      <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
        <u>Out of This World Cafe</u><br>
        <i>Unity, GitHub, C#, Visual Studio Code</i><br>
        Team leader during CSU Fullerton’s FullyHacks 2025 where I guided the development process across UI/UX, 
        animations, and game mechanics, and engineered gameplay systems.<br>
        <a href="https://github.com/emilyytsai/OutOfThisWorldCafe" target="_blank" rel="noopener noreferrer" style="color: #85969E;" class="hover:underline font-bold">GitHub Repo</a><br><br>
      </p>
    </div>


    <div class="space-y-1">
      <div class="grid grid-cols-1 mx-auto max-w-xl justify-items-center">
        <div class="relative aspect-[16/9] sm:h-[120px] lg:h-[180px] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
          <img src="/game-6.png" alt="image" class="w-full h-full object-cover"/>
        </div>
      </div>
      <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
        <u>Wave Rave</u><br>
        <a href="https://pomjellies.itch.io/wave-rave" target="_blank" rel="noopener noreferrer" style="color: #9CE2FF;" class="hover:underline font-bold">Check out on itch.io!</a><br>
        <i>Unity, GitHub, C#, Visual Studio Code</i><br>
        Implemented UI elements and menus, and developed enemy spawning system.
      </p>
    </div>
  </section>

<!-- contact -->
  <section id="contact" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-1 sm:space-y-3 lg:space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Contact</h4>

    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
      Feel free to reach out I would love to connect!
    </p>

      <div class= "flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 z-20">
      <a href="mailto:emilymaytsai@gmail.com" class="transition hover:scale-110">
        <div class="relative aspect-[1/1] h-[75px] sm:h-[80px] lg:h-[90px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl hover:border-[#E64561] transition">
          <img src="/email.png" alt="email" class="w-full h-full object-contain"/>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/emi-tsai/" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative aspect-[1/1] h-[75px] sm:h-[80px] lg:h-[90px] w-auto 
                    bg-white/5 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl hover:border-[#E64561] transition">
          <img src="/linkedin.png" alt="linkedin" class="w-full h-full object-contain"/>
        </div>
      </a>

      <a href="https://www.instagram.com/emilyytsai/" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative aspect-[1/1] h-[75px] sm:h-[80px] lg:h-[90px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl hover:border-[#E64561] transition">
          <img src="/instagram.png" alt="instagram" class="w-full h-full object-contain"/>
        </div>
      </a>

      <a href="https://discord.com/users/beeemi" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative aspect-[1/1] h-[75px] sm:h-[80px] lg:h-[90px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl hover:border-[#E64561] transition">
          <img src="/discord.png" alt="discord" class="w-full h-full object-contain"/>
        </div>
      </a>

      <a href="https://www.github.com/emilyytsai" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative aspect-[1/1] h-[75px] sm:h-[80px] lg:h-[90px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl hover:border-[#E64561] transition">
          <img src="/github.png" alt="github" class="w-full h-full object-contain"/>
        </div>
      </a>

      <a href="https://open.spotify.com/user/emilyishkewl?si=9ac8e340b3d04ba2" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative aspect-[1/1] h-[75px] sm:h-[80px] lg:h-[90px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl hover:border-[#E64561] transition">
          <img src="/spotify.png" alt="spotify" class="w-full h-full object-contain"/>
        </div>
      </a>
    </div>
  </section>

<!-- gallery -->
  <section id="gallery" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-1 sm:space-y-3 lg:space-y-5 pb-20">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center"><br>Gallery</h4>
    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
      A look into my leadership life + more!
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mx-auto">
      
      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/23.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/22.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/21.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/20.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/19.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/18.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/17.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/16.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/15.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/14.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/13.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/12.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/11.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/10.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/9.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/8.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/7.png" alt="image" class="w-full h-full object-cover"/>
      </div>
      
      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/6.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/5.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/4.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/3.png" alt="image" class="w-full h-full object-cover"/>
      </div>


      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/2.png" alt="image" class="w-full h-full object-cover"/>
      </div>

      <div class="relative w-full aspect-[4/3] border border-white/15 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition">
        <img src="/1.png" alt="image" class="w-full h-full object-cover"/>
      </div>
    </div>
  </section>

  </main>
{/if}

<style>
  :global(html, body) {
    overflow-x: hidden;
  }

  .grid-bg {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px);

  background-size: 40px 40px;

  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  }

</style>