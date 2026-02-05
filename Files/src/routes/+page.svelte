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
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- intro screen-->
{#if showIntro}
  <section
    class="fixed inset-0 bg-zinc-900 flex items-center justify-center z-50"
    out:slide={{ duration: 750 }}
  >
    <div class="absolute inset-0 z-0">
      <Aurora
        colorStops={['#DE4F33', '#2A5057', '#30011D']}
        amplitude={2}
        blend={2}
        speed={0.1}
      />
    </div>

  <!-- animate.css -->
      <h1 class="font-outfit text-6xl font-medium text-white relative z-10 animate__animated animate__rubberBand"
        out:slide={{ duration: 100 }}
      >
        Emily Tsai
      </h1>
  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main class="relative min-h-screen bg-zinc-950 text-white pt-28 flex flex-col items-center">
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
          <li><a href="#home" class="hover:text-sky-200 transition">Home</a></li>
          <li><a href="#about" class="hover:text-sky-200 transition">About Me</a></li>
          <li><a href="#projects" class="hover:text-sky-200 transition">Projects</a></li>
          <li><a href="#contact" class="hover:text-sky-200 transition">Contact</a></li>
        </ul>
      </div>
    </nav>

<!-- home -->
  <section id="home" class="max-w-2xl mx-auto rounded-2xl z-20 overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl">
    <img src="/emi-image.jpg" alt="emi" class="w-80 h-64 sm:w-120 sm:h-80 md:w-full md:h-96 object-cover"/>

    <div class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-4">
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center py-4">Hello 🌎, I'm Emi!</h2>

<pre class="text-xl xl:text-base text-white py-2 overflow-x-auto rounded-lg">
<code><span class="text-blue-400">const</span> emi = <span class="text-green-400">&#123;</span>
  aspirations: <span class="text-yellow-400">["Game Developer", "Software Engineer"]</span>,
  values: <span class="text-pink-400">["Passion", "Perseverance", "Patience"]</span>
<span class="text-green-400">&#125;</span>;
</code>
</pre>

    </div>
  </section>

<!-- about -->
  <section id="about" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center pt-8">About Me</h4>
    <p class="text-xl xl:text-base text-white text-center py-2">
      I am a <u>Senior Computer Science student</u> at <u>California State University, Fullerton!</u><br><br>
      I currently serve as the <b>President</b> of CSUF's <b>Video Game Development Club (VGDC)</b>, the <b>Co-Team Lead</b> for <b>ACM Node Buds</b>, and <b>Officer</b> for <b>ACM Open Source</b>.  
      Additionally, I am the <b>Social Media Coordinator</b> for the <b>Engineering & Computer Science Inter-Club Council</b>. <br><br>
      I also love attending hackathons! My first one was FullyHacks, where I won Best Game Project.  
      I am passionate about game development and building projects that make an impact 💗
    </p>
  </section>

<!-- projects -->
  <section id="projects" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">Projects</h4>
    <p class="text-xl xl:text-base text-white text-center py-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </section>

<!-- contact -->
  <section id="contact" class="font-outfit relative z-20 max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h4 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">Contact</h4>
    <p class="text-xl xl:text-base text-white text-center py-2 pb-20">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </section>

  </main>
{/if}