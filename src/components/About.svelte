<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";


  let node: HTMLDivElement;

  let hoveredIndex: number | null = null;

  let contactInfoDim = [
    {
      src: "../assets/linkedin-dim.png",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/kavingnanap/",
    },
    {
      src: "../assets/github-dim.png",
      alt: "GitHub",
      link: "https://github.com/KavinTheG/",
    },
    {
      src: "../assets/mail-dim.png",
      alt: "Email",
      link: "mailto:kavin.balag@gmail.com",
    },
    {
      src: "../assets/blog-dim.png",
      alt: "Blog",
      link: "https://blog.kavintheg.dev/",
    }

  ];

  let contactInfoBright = [
    {
      src: "../assets/linkedin-bright.png",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/kavingnanap/",
    },
    {
      src: "../assets/github-bright.png",
      alt: "GitHub",
      link: "https://github.com/KavinTheG/",
    },
    {
      src: "../assets/mail-bright.png",
      alt: "Email",
      link: "mailto:kavin.balag@gmail.com",
    },
    {
      src: "../assets/blog-bright.png",
      alt: "Blog",
      link: "https://blog.kavintheg.dev/",
    }
  ];
</script>

<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div class="min-h-screen flex flex-col justify-center">
        <div
          class="flex-1 flex flex-col justify-center items-center sm:flex-row"
        >
          <!-- Text section -->
          <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
            <h1
              class="text-6xl font-bold triary"
              transition:fade={{ delay: 200 }}
            >
              Hello,
            </h1>
            <h2 class="text-6xl font-bold py-2">
              <span class="triary" transition:fade={{ delay: 200 }}>I'm</span>
              <span class="primary" transition:fade={{ delay: 300 }}>Kavin</span
              >
            </h2>
            <div transition:fade={{ delay: 350 }}>
              <p class="text-lg secondary leading-relaxed py-6">
                I am a fourth year computer engineering student at the
                University of Ottawa. Currently, I am focused on embedded
                development and machine learning.
              </p>
            </div>
            <div class="container mx-auto flex flex-col justify-center items-center">
              
              <div class="contact-icons">

                {#each contactInfoDim as dimItem, index}
                  <a href={dimItem.link} on:mouseenter={() => hoveredIndex = index}
                    on:mouseleave={() => hoveredIndex = null}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={hoveredIndex === index ? contactInfoBright[index].src : dimItem.src} alt={dimItem.alt} />
                  </a>
                {/each}

                
              </div>
            </div>
          </div>

          <!-- Image section -->
          <div class="w-full sm:w-1/2 flex justify-end items-end">
            <div class="w-full max-w-xs">
              <img
                src="../assets/profile-pic.png"
                alt="Kavin G"
                class="w-full border-double border-4 p-2 border-cyan-800"
                transition:fade={{ delay: 400 }}
              />
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>

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
