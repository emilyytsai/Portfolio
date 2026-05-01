<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import Aurora from '$lib/aurora.svelte';
  import About from '$lib/about.svelte';
  import Projects from '$lib/projects.svelte';
  import Contact from '$lib/contact.svelte';
  import Gallery from '$lib/gallery.svelte';

  let showIntro = true;
  let mobileMenuOpen = false;

  setTimeout(() => {
    showIntro = false;
  }, 2000);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  onMount(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.03, rootMargin: '0px 0px -15px 0px' }
  );

  //separate observer for tall sections like gallery so that it fires before entering viewport
  const earlyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0, rootMargin: '300px 0px 0px 0px' }
  );

  document.querySelectorAll('.fade-in, .fade-in-x').forEach((el) => observer.observe(el));
  document.querySelectorAll('.fade-in2').forEach((el) => earlyObserver.observe(el));

  return () => {
    observer.disconnect();
    earlyObserver.disconnect();
  };
});
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
    class="fixed inset-0 bg-zinc-900 flex items-center justify-center z-50 overflow-hidden"
    out:fade={{ duration: 500 }}
  >

<!-- stars bg -->
<pre class="stars-bg">
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠳
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦
              ⣿⣿⠿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣽⣿⣿⣿⣿⡿⠟⠉⠀⣀⣀⣠⠤⠤⣤⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⡁⠀⠀⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⠿⣿⣶⣶⣤⣤⣤⣤⣤⣴⡖⠀⣠⠀⠘⣿⣿⢿⣿⣿⡟⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣲⡀⢹⡀⢳⣸⣤⣶⡞⢿⠛⠛⠛⠛⠒⠦⣄⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠋⣁⡤⣾⠟⠁⠀⠘⣿⣯⢻⣿⣿⣿⢿⣿⣿⣿
              ⣿⣿⣿⣿⣿⡿⠿⠋⠀⠀⠀⠀⠳⣽⣷⣿⣿⣿⣿⣿⢿⣿⣷⣦⣀⠀⠀⠀⠀⠹⠶⠖⠀⠀⠀⠀⠀⠀⠀⠈⠁⠉⠁⠀⠀⠀⠀⣸⣿⣧⡹⣿⣿⣿⣿⢿⣿
              ⣼⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⣍⡈⢿⣿⣧⣤⣿⣿⠟⢿⣷⣄⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢸⣿⡇⠻⣷⡼⣿⣿⣷⣿⣿
              ⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢻⣿⣿⣽⣛⠛⠛⠁⠀⠀⠈⠻⣷⠀⠀⠀⠀⠀⣜⡆⠀⠀⠀⠀⠀⠀⠀⢀⡤⠚⠁⠈⣿⣷⡀⠈⠻⣿⣿⣿⣷⢯
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢮⡙⠻⠶⠦⠤⣄⣀⠀⠾⠳⡄⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⠈⠻⣷⡄⠀⣿⣿⣿⣿⣾
              ⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠒⠂⠀⠀⡏⢷⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⠀⣰⠏⠀⠉⠉⠉⠻⣷⡒⠀⠙⣿⣰⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣾⠿⣿⣷⣦⣀⣘⣧⣀⣠⣼⣿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢸⣿⣶⣿⣿⡿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠈⠻⣟⠛⠋⠀⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠻⢿⣻⣿⣿⡗⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⢀⠘⠁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⠿⠟⠉⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⡼⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⡼⠁⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠖⠒⠒⠲⣄⠀⠀⠀⠀⠀⢸⠄⠀⢀⠜⠁⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⠹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣠⣶⠋⠀⡰⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠹⣿⣿⡿⠿⠛⠁⣠⠊⢠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣆⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣴⠶⠖⠒⠲⣤⡋⠀⢰⠃⠀⠀⠀⡠⠎⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⢸⡀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣾⣿⣯⣭⣤⣤⣤⣀⡀⠛⠈⠓⠶⢺⣦⠀⠠⠊⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿
              ⠀⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⢀⠈⠙⠿⣿⣶⣮⣭⣙⠛⢶⣶⣿⡿⠏⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿
              ⠀⢁⢸⢸⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣾⣳⣀⣀⠈⣽⡻⠿⣿⣿⣿⡟⠁⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿
              ⠀⢸⡏⢸⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣧⣄⡀⠀⢀⡀⣰⡟⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣧⣻⣿⣿⣿⣿⣿⣿⣿
              ⠀⡼⠀⠘⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠯⠿⣻⡿⠟⠋⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿
              ⡞⠁⠀⠀⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿
              ⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣷⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠃⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⡷⡿⡿⠿⠿⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</pre>

  <!-- animate.css -->
    <h1 class="font-outfit text-6xl font-medium text-white relative z-20 animate__animated animate__backInDown">
      Emily Tsai
    </h1>

    <div class="fixed inset-0 z-0 pointer-events-none grid-bg"></div>

    <!--<div class="absolute inset-0 z-10">
    <Aurora
      colorStops={['#001675', '#A2A5A8', '#6c80d9']}
      amplitude={2}
      blend={10}
      speed={0.1}
    />
    </div>-->

  </section>
{/if}

<!-- portfolio -->
<main
  class="relative min-h-screen bg-zinc-900 text-white flex flex-col items-center"
  class:invisible={showIntro}
>
  <!-- stars bg main -->
    <pre class="stars-bg-main">
                          ⠀⠀⠀⠀⠀⠀⠀⣀⡄⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀      ⠀⠀       ⠀⠀⡀⠀⡀⡀⠂⠂⠈⠀⡐⠁⠀⠈ ⡐ ⠀
                          ⠀⠀⠀⠀⠀⠀⠐⢿⠓⠀⢀⡴⡏⠀⠀⠀⠀⠀        ⠀⠀     ⠀⣀⠔⢂⠁⠁⠀⠀⡐⠈⡐⠁⠀⡐⠁⡐
                          ⠀⠀⠹⡒⠤⣀⡀⠀⢀⡴⠋⢠⠇⠀⠀⠀       ⠀⠀       ⠠⠐⠈⠀⠀⠀⠀⡀⠐⠁⡐⠁⠀⠄⡐
                          ⠀⠀⠀⠱⡀⠀⠉⠑⠋⠀⠀⣸⠀   ⠀      ⠀⠀    ⠐⠈⠀⠀⠀⠀⠀⢀⠄⠁⢀⠂⠀⠀⠀⠨⠀
                          ⠀⠀⠀⠀⢱⡄⠀⠀⠀⠀⠀⠉⠒⠤⣀⡀⠀⠀⠀⠀  ⠀⠀            ⡄⠁⠀⡀⠠⠁⠀⠀⠐⠁⠀
                          ⠀⠀⠀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣈⠵⠦    ⠀⠀         ⡠⠈⠀⠀⠀⡐⠁⠀⠀⠀⠂⠀⠀
                          ⢀⡤⠋⣀⣀⣀⣤⠀⠀⠀⢰⠋⠉⠀⠀⠀               ⢀⠂⠀⠀⠀⠈⠠⠀⠀⠀⠀⠰⡁⠀⠀
                          ⠈⠉⠁⠀⠀⠀⠀⢧⠀⠀⡏⠀⠀⠀      ⠀⠀       ⠀⠔⠁⠀⠀⠀⠀⡐⠀⠀⠀⠀⠀⠅⠀⠀⠀
                          ⠀⢐⣶⣆⠀⠀⢠⠈⢇⢰⠃⠀⠀     ⠀          ⠄⠁⠀⠀⢀⠀⢀⠂⠀⠀⣰⡄⠀⠂⠐⠀⠀⠀
                          ⠀⠈⠙⠀⠀⠀⣏⣧⠈⠟⠀     ⠀⠀        ⢀⠁⠀⠀⠀⠽⡿⠆⠇⠀⠀⢀⣿⣿⣦⣶⣶⠟⠀⠀
                          ⠀⠀⠀⠀⣀⣸⣿⣯⢧⠤⣤⣦⣴⠦       ⠀⠀⠐        ⠀⠁⠀⠀⠛⠿⣿⣿⣿⣿⣿⡁⠀⠀⠀
                          ⠀⠙⠯⡻⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠰⣄⣠⡇   ⠐⠀           ⠀⠂⠀⠀⢸⣿⡿⠛⠛⠿⣆⠀⠀
                          ⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⠁⠀⠀⠀⣠⢿⣿⠟⠒⠀ ⠐ ⠀   ⠀⠀      ⠐ ⠀⠸⠊⠁⠀⢐⠀⠀⠀⠀
                          ⠀⠀⠀⠀⡾⣿⠿⠺⢝⡯⢧⠀⠀⠀⠀⠀⠻⠀⠀  ⠐  ⠀⠀         ⠀⠂⠀⠀⠀⠀⡐⠂⠀⠀⠠⠁
                          ⠀⠀⠀⢼⠓⠁⠀⠀⠀⠉⠺⠆⠀⠀⠀⠀⠀⠀  ⠐⠀⠀           ⠀⡸⠀⠀⢀⢿⠐⠀⠀⠀⡐⠁⠀
                          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠐ ⠀⠀          ⢀⠂⠀⠀⡜⡌⡇⠀⠀⡐⠀⠀⠀
                        ⠀⠀⠀   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠐⠀⠀          ⠙⢟⡒⠒⠛⠁⠀⠘⠒⠒⢲⡶⠂⠀
                        ⠀⠀⠀⠀⠀⠀   ⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀ ⠐  ⠀⠀         ⣤⣖⠀⠈⢢⠀⠀⠀⠀⡤⠛⠁⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠀ ⠀    ⠐ ⠀⠀⠀⠀      ⠈⠻⠉⠀⢠⠇⢀⡤⣀⠌⢳⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠐        ⠀⠀   ⠐  ⠀⡿⠊⠁⠀⠈⠳⣼⡄⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠐⠀   ⠀⠀   ⠀⠀  ⠐      ⠀⠀⢀⠂⠈⠉⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠐ ⠀⠀   ⠀   ⠀⠀ ⠐        ⠀⢰⡆⠀⣀⠀⠀⢀⣄⡀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀           ⠀⠐         ⠶⢾⣿⣟⠁⠀⠀⠺⡟⠃
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀   ⠀       ⠐⠀         ⠀⢻⡏⢉⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    </pre>
    <div class="fixed inset-0 z-0 pointer-events-none grid-bg"></div>

    <div class="fixed inset-0 z-10">
      <Aurora
        colorStops={['#001675', '#A2A5A8', '#6c80d9']}
        amplitude={2}
        blend={10}
        speed={0.1}
      />
    </div>

<!-- navbar (desktop) -->
  <nav class="fixed top-0 left-0 w-full bg-white/10 border border-white/5 backdrop-blur-md z-30">
    <div class="max-w-6xl mx-auto px-3 py-3 flex justify-between items-center">
      <a href="#home" class="flex items-center">
        <div class="shimmer underline-center font-outfit text-3xl font-semibold" data-text="Emily Tsai">Emily Tsai</div>
      </a>
      <ul class="hidden md:flex space-x-6 text-[1.375rem] font-outfit text-white">
        <li><a href="#home" class="nav-link">Home</a></li>
        <!-- About Me hidden on desktop since it's inlined in the home section -->
        <li class="md:hidden"><a href="#about" class="nav-link">About Me</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
        <li><a href="#gallery" class="nav-link">Gallery</a></li>
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
    <a href="#home" on:click={toggleMenu} class="hover:text-[#98aafa] transition">Home</a>
    <a href="#about" on:click={toggleMenu} class="hover:text-[#98aafa] transition">About Me</a>
    <a href="#projects" on:click={toggleMenu} class="hover:text-[#98aafa] transition">Projects</a>
    <a href="#contact" on:click={toggleMenu} class="hover:text-[#98aafa] transition">Contact</a>
    <a href="#gallery" on:click={toggleMenu} class="hover:text-[#98aafa] transition">Gallery</a>
  </div>
{/if}

<!-- home -->
<div id="home"></div>

<!-- mobile only has a centered single card -->
<div class="md:hidden card mt-28 mx-auto w-full max-w-full sm:max-w-md px-0 z-20 rounded-2xl
                        overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl">
 
    <div class="relative aspect-[4/3] sm:h-[360px] overflow-hidden">
      <img src="/emi-image2.jpg" alt="emi" class="absolute inset-0 w-full h-full object-cover"/>
    </div>
    <div class="font-outfit px-4 pt-6 space-y-8 text-white">
      <h2 class="text-4xl md:text-5xl font-bold text-center flex items-center justify-center gap-2 flex-wrap">
        <span class="text-sm md:text-xl">₊˚⊹</span> Hello&nbsp;<img src="https://github.com/user-attachments/assets/2b86e697-a3c6-4460-88d1-86d4a4711225" width="50" height="50" alt="spinning globe" class="inline-block align-middle"/>, &thinsp;&hairsp;I'm Emi! <span class="text-sm md:text-2xl">⊹˚₊</span>
      </h2>
      <pre class="text-[0.80rem] md:text-[0.95rem] pb-2 overflow-x-auto rounded-md">
<code><span class="text-blue-300">  const</span> emi = <span class="text-green-300">&#123;</span>
    aspirations: <span class="text-yellow-300">["UI/UX Designer", "Game Developer"]</span>,
    values: <span class="text-pink-300">["Perseverance", "Passion", "Patience"]</span>
<span class="text-green-400">   &#125;</span>;</code>
      </pre>
    </div>
  </div>

  <!-- desktop has two column layout -->
  <section class="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center mt-28 w-full max-w-5xl mx-auto px-4 z-20">

    <div class="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl duration-300 hover:-translate-y-2">
      <img src="/emi-image2.jpg" alt="emi" class="w-full h-[520px] object-cover"/>
    </div>

    <div class="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl px-8 py-8
                font-outfit text-white flex flex-col gap-6 duration-300 hover:-translate-y-2">

    <h2 class="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-2 flex-wrap">
      <span class="text-sm md:text-xl">₊˚⊹</span> Hello&nbsp;<img src="https://github.com/user-attachments/assets/2b86e697-a3c6-4460-88d1-86d4a4711225" width="50" height="50" alt="spinning globe"
       class="inline-block align-middle"/>, &thinsp;&hairsp;I'm Emi! <span class="text-sm md:text-2xl">⊹˚₊</span> </h2>

      <pre class="text-[0.85rem] overflow-x-auto rounded-md">
<code><span class="text-blue-300">  const</span> emi = <span class="text-green-300">&#123;</span>
    aspirations: <span class="text-yellow-300">["UI/UX Designer", "Game Developer"]</span>,
    values: <span class="text-pink-300">["Perseverance", "Passion", "Patience"]</span>
<span class="text-green-400">   &#125;</span>;</code>
      </pre>

      <p class="text-base xl:text-md text-white/80 leading-relaxed">
        I am a <u style="color: #98aafa;"><b style="color: #98aafa;">Computer Science</b> Major</u>, with a <u style="color: #98aafa;">Minor in <b style="color: #98aafa;">Data Science</b></u> and a <u style="color: #98aafa;">Minor in <b style="color: #98aafa;">Communication Studies</b></u> @ CSU Fullerton!
      </p>

      <p class="text-base xl:text-md text-white/80 leading-relaxed">
        I currently serve as the <b>President</b> of CSUF's 
        <a href="https://vgdccsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #6c80d9;" class="hover:underline font-bold">Video Game Development Club (VGDC),</a>
        the <b>Co-Team Lead</b> for 
        <a href="https://acmcsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #6c80d9;" class="hover:underline font-bold">ACM Node Buds</a>,
        and <b>Officer</b> for 
        <a href="https://acmcsuf.com/" target="_blank" rel="noopener noreferrer" style="color: #6c80d9;" class="hover:underline font-bold">ACM Open Source.</a> ♡
      </p>

      <div class="flex justify-start text-2xl">
        <a href="/Emily_Tsai_Resume.pdf" target="_blank" rel="noopener noreferrer" class="button">Resume</a>
      </div>
    </div>
  </section>

<!-- about -->
  <!-- only shows on mobile since desktop inlines it above -->
  <div class="md:hidden w-full">
    <About />
  </div>

<!-- projects -->
    <Projects />
<!-- contact -->
    <Contact />

<!-- gallery -->
    <Gallery />

<!-- footer -->
  <!-- signature -->
  <div class="relative z-20 mt-8 flex justify-center">
    <img 
      src="/signature.png" 
      alt="Emily Tsai signature" 
      class="w-24 sm:w-30 md:w-36 mix-blend-screen"
      style="opacity: 0.85;"
    />
  </div>
    <footer class="font-outfit relative z-20 text-center text-white/50 text-sm py-6">
      <p>© 2026 Emily Tsai</p>
    </footer>

  </main>