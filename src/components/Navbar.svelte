<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Function to scroll into view
  // @ts-ignore
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute('href'));
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>
<header class="sticky top-0 background py-5">
  <div class="flex justify-end items-center">
    <button class="sm:hidden triary hover:text-cyan-300 p-2" on:click={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    {#if isMenuOpen}
      <div class="dropdown sm:hidden  absolute top-full left-0 right-0 z-20">
        <a href="#about" class="block p-4 triary hover:text-cyan-300" on:click|preventDefault={scrollIntoView}>About</a>
        <a href="#projects" class="block p-4 triary hover:text-cyan-300" on:click|preventDefault={scrollIntoView}>Projects</a>
        <a href="#contact" class="block p-4 triary hover:text-cyan-300" on:click|preventDefault={scrollIntoView}>Contact & Socials</a>
        <a href="#blog" class="block p-4 triary hover:text-cyan-300">Blog</a>
      </div>
    {/if}
    <nav class="hidden sm:flex flex-grow justify-end pr-4">
      <a href="#about" class="triary hover:text-cyan-300 rounded-md font-medium ml-4"
        on:click|preventDefault={scrollIntoView}>About</a>
      <a href="#projects" class="triary hover:text-cyan-300 rounded-md font-medium ml-4"
        on:click|preventDefault={scrollIntoView}>Projects</a>
      <a href="#contact" class="triary hover:text-cyan-300 rounded-md font-medium ml-4"
        on:click|preventDefault={scrollIntoView}>Contact & Socials</a>
      <a href="#blog" class="triary hover:text-cyan-300 rounded-md font-medium ml-4">Blog</a>
    </nav>
  </div>
</header>


<style>
  header {
    z-index: 20;
    backdrop-filter: blur(10px); /* Adjust the blur radius as needed */
    background-color: rgba(11, 12, 16, 0.5);    
    /* Other styles for your navbar */
  }

  .dropdown {
    z-index: 20;
    backdrop-filter: blur(10px); /* Adjust the blur radius as needed */
    background-color: rgba(11, 12, 16, 0.5);    

  }
</style>
