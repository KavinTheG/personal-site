<script>
  // @ts-ignore
  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<header class="sticky top-0 flex background items-baseline justify-end py-5 ">
  <nav class="flex flex-grow justify-end">
      <a href="#about" class="triary hover:text-cyan-300 rounded-md font-medium mr-12 "
        on:click|preventDefault={scrollIntoView}>About</a>
      <a href="#projects" class="triary hover:text-cyan-300 rounded-md font-medium mr-12"
        on:click|preventDefault={scrollIntoView}>Projects</a>
      <a href="/blog" class="triary hover:text-cyan-300 rounded-md font-medium">Blog</a>
  </nav>
</header>


<style>
  header {
    z-index: 20;
    backdrop-filter: blur(10px); /* Adjust the blur radius as needed */
    background-color: rgba(11, 12, 16, 0.5);    
    /* Other styles for your navbar */
  }
</style>
