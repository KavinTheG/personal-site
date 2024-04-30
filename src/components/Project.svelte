<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";

  /**
     * @type {HTMLDivElement}
     */
  let node;

  let githubHover = false;
</script>

<header />

<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
        <div transition:fade={{ delay: 1000 }} class="h-screen flex flex-col justify-center">
            <h1 class="text-5xl pb-10 secondary ">My Projects</h1>
            <!-- Project  cards -->
            <div class="project-info border-2 border-cyan-800 background_secondary min-h-0 min-w-0">
                <!-- image -->
                <div class="image-container">
                    <!-- Your image goes here -->
                    <img src="../assets/drone.png" alt="project image" aria-hidden="true">
                </div>

                <!-- description -->
                <div class="w-1/2 min-w-0 flex flex-col px-8">
                    <h1 class="text-3xl secondary pt-8 ">Embedded Rust Flight Controller</h1>
                    
                    <p class="secondary pt-4">
                        This projects aims to achieve reliable flight performance with a Rust based flight controller.
                    </p>

                    <!-- links -->
                    <div class="flex flex-col justify-between items-center mt-auto mb-5"> <!-- Adjust margin top as needed -->
                        <a href="https://github.com/KG-Drone-Project/" target="_blank" rel="noopener noreferrer" 
                        on:mouseenter={() => githubHover = true} on:mouseleave={() => githubHover = false}>
                            {#if githubHover}
                            <img src="../assets/github-bright.png" alt="github logo" aria-hidden="true" class="w-12 h-12">
                            {:else}
                            <img src="../assets/github-dim.png" alt="github logo" aria-hidden="true" class="w-12 h-12">
                            {/if}
                        
                        </a>
                    </div>
                </div>



                
            </div>
        </div>
    {/if}
  </div>
</IntersectionObserver>


<style>
    .project-info {
        display: flex;
        max-width: 75%;
        margin: 0 auto;
        border-radius: 5px;

    }

    .image-container {
        flex: 0 0 auto;
        width: 50%;
    }

    .image-container img {
        max-width: 100%;
        height: auto;
    }
</style>