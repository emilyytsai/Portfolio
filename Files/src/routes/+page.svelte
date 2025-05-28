<script lang="ts">
  import { slide } from 'svelte/transition';

  let showIntro = true;

  setTimeout(() => {
    showIntro = false;
  }, 2000);
  
</script>

<svelte:head>
  <title>Emily Tsai · Portfolio</title>

  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <!-- animate.css -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</svelte:head>

<!-- intro screen-->
{#if showIntro}
  <section
    class="fixed inset-0 bg-black flex items-center justify-center z-50"
    out:slide={{ duration: 800 }}
  >
  
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute w-full h-full object-cover"
      src="/animated-blur.mp4"
    ></video>

      <h1 class="font-outfit text-6xl font-medium text-white relative z-10 animate__animated animate__rubberBand"
        out:slide={{ duration: 10 }}
      >
        Emily Tsai
      </h1>
  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main class="relative min-h-screen bg-white text-gray-900">

    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute w-full h-full object-cover"
      src="/animated-blur2.mp4"
    ></video>

    <div class="font-outfit relative z-10 max-w-2xl mx-auto py-20 space-y-2">
      <h2 class="text-6xl font-bold text-white">Emily Tsai</h2>
      <p class="text-3x1 text-white opacity-75">Welcome to my portfolio!</p>

      {#each Array(500) as _, i}
        <p class="text-white">testing scroll line #{i + 1}</p>
      {/each}

    </div>
  </main>
{/if}
