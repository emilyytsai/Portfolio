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

  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- intro screen-->
{#if showIntro}
  <section
    class="fixed inset-0 bg-black flex items-center justify-center z-50"
    out:slide={{ duration: 800 }}
  >
    <div class="absolute inset-0 z-0">
      <Aurora
        colorStops={['#FF85C6', '#095242', '#5300FF']}
        amplitude={2}
        blend={0.5}
        speed={0.1}
      />
    </div>

  <!-- animate.css -->
      <h1 class="font-outfit text-6xl font-medium text-white relative z-10 animate__animated animate__rubberBand"
        out:slide={{ duration: 10 }}
      >
        Emily Tsai
      </h1>
  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main class="relative min-h-screen flex items-center bg-black text-white">
    <div class="fixed inset-0 z-0">
      <Aurora
        colorStops={['#FF85C6', '#095242', '#5300FF']}
        amplitude={2}
        blend={0.5}
        speed={0.1}
      />
    </div>
    <div class="fixed inset-0 z-10">
      <Galaxy
        focal={[0.5, 0.5]}
        starSpeed={0.5}
        density={1.4}
        glowIntensity={0.55}
        transparent={true}
        mouseInteraction={true}
      />
    </div>

    <!-- navbar -->
    <nav class="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-30">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="font-outfit text-3xl font-semibold">Emily Tsai</div>
        <ul class="flex space-x-6 text-2xl font-outfit text-white">
          <li><a href="#home" class="hover:underline">Home</a></li>
          <li><a href="#about" class="hover:underline">About</a></li>
          <li><a href="#projects" class="hover:underline">Projects</a></li>
          <li><a href="#contact" class="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>

    <div class="font-outfit relative z-20 max-w-2xl mx-auto py-20 space-y-2">
      <h2 class="text-6xl font-bold text-white text-center">Hello 🌎, I'm Emi!</h2>
      <p class="text-3xl text-white opacity-75 text-center">Aspiring Game Developer & Software Engineer 💗</p>

      {#each Array(500) as _, i}
        <p class="text-white">testing scroll line #{i + 1}</p>
      {/each}

    </div>
  </main>
{/if}