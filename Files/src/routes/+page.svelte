<script lang="ts">
  import { slide } from 'svelte/transition';
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
<!-- stars bg -->
<pre class="stars-bg">

                            ⠐⠀     ⠀⠀⠀⢸⣦⡀⠀⠐⠀⠀⢀⡄⠀⠀⠀⠐⠀⠀⠀⠀⠀⠐⠀⠀ ⠐⠀⠀⠀⠀⠀⠀⠐⠀⠀       ⠐
                                  ⠀ ⠀⠐⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁⠀⢠⣄⡀⢀⣴⠀⠀⠀⠐⠀⠀⠀⠀⠐⠀⠀⠀    ⠐⠀
                        ⠐⠀      ⠐ ⠐⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠐⠀⢀⣿⣿⣿⣇⠀⠀⠀⠂⠀⠐⠀⠀⠀⠀⠀⠀⠀
                            ⠐  ⠐ ⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀⠒⠻⠿⣿⡿⠿⠓⠂⠀⠀⢂⡇⠀⠐⠀⠀⠀⠐⠀⠀        ⠀
                                  ⠀⠐⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⣤⠀⠀⣿⠁⠀⠐⠀⢀⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀
                              ⠐⠀  ⠀⠀⠐⠀⠸⣿⡿⠏⠀⢀⠀⠀⠿⣶⣤⣤⣤⣄⣀⣴⣿⡿⢻⣿⡆⠂⠀⠀⠀⠀⠀⠐⠀     ⠐
                                  ⠀⠐⠀⠐⠀⠟⠁⠀⢀⣼⠀⠐⠀⠹⣿⣟⠿⠿⠿⡿⠋⠀⠘⣿⣇⠀⠄⠀⠐⠀⠀⠀
                                  ⠀⠀⠀⠀⠀⢳⣶⣶⣿⣿⣇⣀⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀⠀⠛⠿⣿⣦⣤⣀⠀⠐⠀
                                  ⠀⠀⠐⠀ ⠀⣹⣿⣿⣿⣿⠿⠋⠁⠀⣹⣿⠳⠀⠀⠀⠀⠀⠀⢀⣠⣽⣿⡿⠟⠃     ⠐⠀
                                  ⠀⠀⠀⠈⠀⢰⠿⠛⠻⢿⡇⠀⠀⠀⣰⣿⠏⠀⠀⢀⠀⠀⠁⣾⣿⠟⠋⠁⠐⠀⠀⠀
                        ⠐⠀      ⠀⠀⠐⠀⠀⠐⠀⠀⠀⠀⠋⠀⠀⣰⣿⣿⣾⣿⠿⢿⣷⣀⢀⣿⡇⠁⠀⠐⠀⠀⠀            ⠐
                                  ⠀⠀⠀⠀⠀⠐⠀⠀⠀⠠⠀⠀⠀⠋⠉⠁⠀⠐⠀⠀⠙⢿⣿⣿⠇⠐⠀⠐⠀⠀⠀⠐⠀
                                  ⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠐⠀⠀⠀⠀⠙⢿⠀⠀⠀⠀⠀⠀⠀
                                  ⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</pre>

  <!-- animate.css -->
    <h1 class="font-outfit text-6xl font-medium text-white relative z-20 animate__animated animate__rubberBand">
      Emily Tsai
    </h1>

    <div class="fixed inset-0 z-0 pointer-events-none grid-bg"></div>

    <div class="absolute inset-0 z-10">
    <Aurora
      colorStops={['#001675', '#A2A5A8', '#6c80d9']}
      amplitude={2}
      blend={10}
      speed={0.1}
    />
    </div>

    

  </section>
{/if}

<!-- portfolio -->
{#if !showIntro}
  <main class="relative min-h-screen bg-zinc-900 text-white flex flex-col items-center">
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
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" class="flex items-center">
          <div class="shimmer underline-center font-outfit text-3xl font-semibold" data-text="Emily Tsai">
            Emily Tsai
          </div>
        </a>

        <ul class="hidden md:flex space-x-6 text-[1.375rem] font-outfit text-white">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About Me</a></li>
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
  <section id="home" class="card mt-28 mx-auto w-full max-w-full sm:max-w-md lg:max-w-lg px-0 sm:px-0 sm:px-0 z-20 rounded-2xl
                            overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl">

    <div class="relative aspect-[4/3] sm:h-[360px] lg:h-[420px]">
      <img src="/emi-image2.jpg" alt="emi" class="absolute inset-0 w-full h-full object-cover"/>
    </div>

    <div class="font-outfit px-4 pt-6 space-y-8 text-white">
    <h2 class="text-4xl md:text-5xl font-bold text-center flex items-center justify-center gap-2 flex-wrap">
      <span class="text-sm md:text-xl">₊˚⊹</span> Hello&nbsp;<img src="https://github.com/user-attachments/assets/2b86e697-a3c6-4460-88d1-86d4a4711225" width="45" height="45" alt="spinning globe" class="inline-block align-middle"/>, I'm Emi! <span class="text-sm md:text-2xl">⊹˚₊</span>
    </h2>

  <pre class="text-[0.80rem] lg:text-[0.95rem] pb-2 overflow-x-auto rounded-lg">
<code><span class="text-blue-300">  const</span> emi = <span class="text-green-300">&#123;</span>
    aspirations: <span class="text-yellow-300">["UI/UX Designer", "Game Developer", "Software Engineer"]</span>,
    values: <span class="text-pink-300">["Perseverance", "Passion", "Patience"]</span>
<span class="text-green-400">   &#125;</span>;</code>
  </pre>

    </div>
  </section>

<!-- about -->
    <About />

<!-- projects -->
    <Projects />
<!-- contact -->
    <Contact />

<!-- gallery -->
    <Gallery />
  </main>
{/if}