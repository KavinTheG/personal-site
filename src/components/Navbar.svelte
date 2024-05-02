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

<header class="sticky top-0 flex background items-baseline justify-end py-5 px-20">
  <nav class="flex flex-grow justify-end">
      <a href="#about" class="triary hover:text-cyan-300 rounded-md font-medium mr-12 "
        on:click|preventDefault={scrollIntoView}>About</a>
      <a href="#projects" class="triary hover:text-cyan-300 rounded-md font-medium mr-12"
        on:click|preventDefault={scrollIntoView}>Projects</a>
      <a href="/" class="triary hover:text-cyan-300 rounded-md font-medium"
        on:click|preventDefault={scrollIntoView}>Contact</a>
  </nav>
</header>