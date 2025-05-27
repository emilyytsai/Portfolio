<script lang="ts">
  import { slide } from 'svelte/transition';

  let showIntro = true;

  setTimeout(() => {
    showIntro = false;
  }, 2000);
  
</script>

<svelte:head>
  <title>Emily Tsai · Portfolio</title>

  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
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

      <h1 class="font-dmsans text-5xl font-semibold text-white relative z-10 animate__animated animate__rubberBand">
        Emily Tsai
      </h1>
  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main
    class="relative min-h-screen bg-white text-gray-900"
  >
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute w-full h-full object-cover"
      src="/animated-blur2.mp4"
    ></video>

    <div class="relative z-10 max-w-2xl mx-auto px-2 py-8 space-y-2">
      <h2 class="font-dmsans text-4xl font-bold">Emily Tsai</h2>
      <p class="text-lg text-gray-800">Welcome to my portfolio!</p>
    </div>
  </main>
{/if}
