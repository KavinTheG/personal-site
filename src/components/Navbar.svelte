<script lang="ts">
  import { blogLink } from "../stores/linkStore";
  import { onDestroy } from "svelte";

  let link: string;
  const unsubscribe = blogLink.subscribe(value => {
    link = value;
  });

  onDestroy(unsubscribe);

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
<header class="sticky top-0 background py-5 px-[20%]">
  <div class="flex justify-end items-center ">
    <button class="sm:hidden triary hover:text-cyan-300 p-2" on:click={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    {#if isMenuOpen}
      <div class="dropdown sm:hidden  absolute top-full left-0 right-0 z-20">
        <a href="#about" class="block p-4 triary hover:text-cyan-300" on:click|preventDefault={scrollIntoView}>About</a>
        <a href="#projects" class="block p-4 triary hover:text-cyan-300" on:click|preventDefault={scrollIntoView}>Projects</a>
        <a href="#experience" class="block p-4 triary hover:text-cyan-300" on:click|preventDefault={scrollIntoView}>Projects</a>
        <a href={link} target="_blank" rel="noopener noreferrer" class="block p-4 triary hover:text-cyan-300">Blog</a>
      </div>
    {/if}
    <nav class="hidden sm:flex flex-grow justify-end pr-4 ">
      <a href="#about" class="triary hover:text-cyan-300 rounded-md font-medium ml-12"
        on:click|preventDefault={scrollIntoView}>About</a>
      <a href="#projects" class="triary hover:text-cyan-300 rounded-md font-medium ml-12"
        on:click|preventDefault={scrollIntoView}>Projects</a>
      <a href="#experience" class="triary hover:text-cyan-300 rounded-md font-medium ml-12"
        on:click|preventDefault={scrollIntoView}>Experience</a>
      <a href={link} class="triary hover:text-cyan-300 rounded-md font-medium ml-12" target="_blank"
      rel="noopener noreferrer">Blog</a>
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
