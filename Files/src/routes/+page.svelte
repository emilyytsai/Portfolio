<script lang="ts">
  import { slide } from 'svelte/transition';
  import Aurora from '$lib/aurora.svelte';
  import Galaxy from '$lib/galaxy.svelte';

  let showIntro = true;

  setTimeout(() => {
    showIntro = false;
  }, 2000);
  
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
    class="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50"
    out:slide={{ duration: 750 }}
  >

  <!-- animate.css -->
      <h1 class="font-outfit text-6xl font-medium text-white relative z-10 animate__animated animate__rubberBand">
        Emily Tsai
      </h1>

    <div class="absolute inset-0 z-0">
    <Aurora
      colorStops={['#DE4F33', '#2A5057', '#30011D']}
      amplitude={2}
      blend={2}
      speed={0.1}
    />
    </div>

  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main class="relative min-h-screen bg-zinc-900 text-white pt-28 flex flex-col items-center">
    <div class="fixed inset-0 z-0">
      <Aurora
        colorStops={['#DE4F33', '#2A5057', '#30011D']}
        amplitude={2}
        blend={2}
        speed={0.1}
      />
    </div>
    <div class="fixed inset-0 z-10">
      <Galaxy
        focal={[0.5, 0.5]}
        starSpeed={0.5}
        density={1.2}
        glowIntensity={0.55}
        transparent={true}
        mouseInteraction={true}
      />
    </div>

    <!-- navbar -->
    <nav class="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-30">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="font-outfit text-3xl font-semibold">Emily Tsai</div>
        <ul class="hidden md:flex space-x-6 text-[1.375rem] font-outfit text-white">
          <li><a href="#home" class="hover:text-teal-100 transition">Home</a></li>
          <li><a href="#about" class="hover:text-sky-200 transition">About Me</a></li>
          <li><a href="#projects" class="hover:text-blue-200 transition">Projects</a></li>
          <li><a href="#contact" class="hover:text-purple-200 transition">Contact</a></li>
          <li><a href="#gallery" class="hover:text-pink-200 transition">Gallery</a></li>
        </ul>
      </div>
    </nav>

<!-- home -->
  <section id="home" class="mx-auto w-full  max-w-sm sm:max-w-md lg:max-w-lg px-4 sm:px-0 z-20 rounded-2xl
                            overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl">

    <div class="relative sm:aspect-[4/3] h-[280px] sm:h-[360px] lg:h-[420px]">
      <img src="/emi-image.jpg" alt="emi" class="absolute inset-0 w-full h-full object-cover"/>
    </div>

    <div class="font-outfit px-4 pt-6 space-y-8 text-white">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Hello 🌎, I'm Emi!
      </h2>

  <pre class="text-[0.67rem] sm:text-[0.77rem] lg:text-[0.95rem] pb-2 overflow-x-auto rounded-lg">
  <code><span class="text-blue-400">const</span> emi = <span class="text-green-400">&#123;</span>
    aspirations: <span class="text-yellow-400">["Game Developer", "Software Engineer"]</span>,
    values: <span class="text-pink-400">["Perseverance", "Passion", "Patience"]</span>
  <span class="text-green-400">&#125;</span>;</code>
  </pre>

    </div>
  </section>

<!-- about -->
  <section id="about" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center pt-6">About Me</h4>
    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
      I am a <u>Senior Computer Science student</u> at <u>California State University, Fullerton!</u><br><br>

      I currently serve as the <b>President</b> of CSUF's 
      <a href="https://vgdccsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #ffbea8;" class="hover:underline font-bold">Video Game Development Club (VGDC),</a>
      the <b>Co-Team Lead</b> for 
      <a href="https://acmcsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #ffbea8;" class="hover:underline font-bold">ACM Node Buds</a>,
      and <b>Officer</b> for 
      <a href="https://acmcsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #ffbea8;" class="hover:underline font-bold">ACM Open Source.</a>  
      Additionally, I am the <b>Social Media Coordinator</b> for the <b>Engineering & Computer Science Inter-Club Council</b>. <br><br>

      I also love attending hackathons! My first one was 
      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7318121147944841217/" target="_blank" rel="noopener noreferrer" style="color: #ffbea8;" class="hover:underline font-bold">FullyHacks 2025, where I won Best Game Project.</a>  
      I am passionate about game development and building projects that make an impact 💗
    </p>
  </section>

<!-- projects -->
  <section id="projects" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Projects</h4>
    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
      <u>Oddinary Farm</u><br>
      <a href="https://store.steampowered.com/app/3848990/Oddinary_Farm/" target="_blank" rel="noopener noreferrer" style="color: #9CE2FF;" class="hover:underline font-bold">Playtest out on Steam!</a><br>
      <i>Unity, GitHub, C#, Visual Studio Code</i><br>
      Engineered UI animation classes and oversaw development workflows and creative direction.<br><br>

      <u>Evocation</u><br>
      <i>Unity, GitHub, C#, Visual Studio Code</i><br>
      Developed player input mechanics and UI elements and menus.<br>
      <a href="https://github.com/JesDaw/Evocation" target="_blank" rel="noopener noreferrer" style="color: #85969E;" class="hover:underline font-bold">GitHub Repo</a><br><br>

      <u>Country Life Cafe</u><br>
      <i>Unity, GitHub, C#, Visual Studio Code</i><br>
      Led a team of developers, created main gameplay loops, UI systems, implemented procederal 
      difficulty scaling, and managed asset creation and integration.<br>
      <a href="https://github.com/emilyytsai/CountryLifeCafe" target="_blank" rel="noopener noreferrer" style="color: #85969E;" class="hover:underline font-bold">GitHub Repo</a><br><br>

      <u>Out of This World Cafe</u><br>
      <i>Unity, GitHub, C#, Visual Studio Code</i><br>
      Team leader during CSU Fullerton’s FullyHacks 2025 where I guided the development process across UI/UX, 
      animations, and game mechanics, and engineered gameplay systems.<br>
      <a href="https://github.com/emilyytsai/OutOfThisWorldCafe" target="_blank" rel="noopener noreferrer" style="color: #85969E;" class="hover:underline font-bold">GitHub Repo</a><br><br>

      <u>Wave Rave</u><br>
      <a href="https://pomjellies.itch.io/wave-rave" target="_blank" rel="noopener noreferrer" style="color: #9CE2FF;" class="hover:underline font-bold">Check out on itch.io!</a><br>
      <i>Unity, GitHub, C#, Visual Studio Code</i><br>
      Implemented UI elements and menus, and developed enemy spawning system.
    </p>
  </section>

<!-- contact -->
  <section id="contact" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Contact</h4>

    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2">
      Best ways to contact me. Feel free to reach out I would love to connect!
    </p>

      <div class= "flex justify-center gap-6 z-20">
      <a href="mailto:emilymaytsai@gmail.com" class="transition hover:scale-110">
        <div class="relative sm:aspect-[1/1] h-[40px] sm:h-[50px] lg:h-[75px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-2x1 shadow-2xl hover:border-red-300/60 transition">
          <img src="/email.png" alt="email" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/emi-tsai/" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative sm:aspect-[1/1] h-[40px] sm:h-[50px] lg:h-[75px] w-auto 
                    bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-2x1 shadow-2xl hover:border-red-300/60 transition">
          <img src="/linkedin.png" alt="linkedin" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </a>

      <a href="https://www.github.com/emilyytsai" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative sm:aspect-[1/1] h-[40px] sm:h-[50px] lg:h-[75px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-2x1 shadow-2xl hover:border-red-300/60 transition">
          <img src="/github.png" alt="linkedin" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </a>

      <a href="https://www.instagram.com/emilyytsai/" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative sm:aspect-[1/1] h-[40px] sm:h-[50px] lg:h-[75px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-2x1 shadow-2xl hover:border-red-300/60 transition">
          <img src="/instagram.png" alt="linkedin" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </a>

      <a href="https://discord.com/users/beeemi" target="_blank" rel="noopener noreferrer" class="transition hover:scale-110">
        <div class="relative sm:aspect-[1/1] h-[40px] sm:h-[50px] lg:h-[75px] w-auto
                    bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-2x1 shadow-2xl hover:border-red-300/60 transition">
          <img src="/discord.png" alt="discord" class="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </a>
    </div>
  </section>

<!-- gallery -->
  <section id="gallery" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Gallery</h4>
    <p class="text-base sm:text-lg lg:text-xl text-white text-center py-2 pb-20">
      A look into my leadership life + more!
    </p>
  </section>

  </main>
{/if}