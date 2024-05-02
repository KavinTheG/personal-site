<script>
    let contactInfoDim = [
    { src: '../assets/linkedin-dim.png', alt: 'LinkedIn', link: 'https://www.linkedin.com/in/kavingnanap/' },
    { src: '../assets/github-dim.png', alt: 'GitHub', link: 'https://github.com/KavinTheG/' },
    { src: '../assets/mail-dim.png', alt: 'Email', link: 'mailto:kavin.balag@gmail.com' },
    ];


    let contactInfoBright = [
    { src: '../assets/linkedin-bright.png', alt: 'LinkedIn', link: 'https://www.linkedin.com/in/kavingnanap/' },
    { src: '../assets/github-bright.png', alt: 'GitHub', link: 'https://github.com/KavinTheG/' },
    { src: '../assets/mail-bright.png', alt: 'Email', link: 'mailto:kavin.balag@gmail.com' },
    ];
</script>

<footer class="w-full-200 py-8">
    <div class="container mx-auto flex flex-col justify-center items-center">

        <div class="contact-icons">
        {#each contactInfoDim as { src, alt, link }}
            <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt}>
            </a>
        {/each}
        </div>
    </div>
</footer>

<style>
  .contact-icons {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Adjust spacing from the top */
  }

  .contact-icons img {
    width: 50px; /* Adjust image size as needed */
    height: 50px; /* Adjust image size as needed */
    margin: 0 40px; /* Adjust spacing between images */
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .contact-icons img:hover {
    transform: scale(1.2); /* Adjust scale factor for hover effect */
  }
</style>
