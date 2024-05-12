<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { fade } from "svelte/transition";

    /**
     * @type {HTMLDivElement}
     * */
    let node;
</script>

<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div class="min-h-screen flex flex-col justify-center">
        <div class="flex-1 flex flex-col justify-center items-center sm:flex-row">
          <!-- Text section -->
          <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
            <h1 class="text-6xl font-bold triary" transition:fade={{ delay: 200 }}>Hello,</h1>
            <h2 class="text-6xl font-bold py-2">
              <span class="triary" transition:fade={{ delay: 200 }}>I'm</span>
              <span class="primary" transition:fade={{ delay: 300 }}>Kavin</span>
            </h2>
            <div transition:fade={{ delay: 350 }}>
              <p class="text-lg secondary leading-relaxed py-6"> 
                I am a fourth year computer engineering student at the University of Ottawa.
                Currently, I am focused on embedded development and machine learning.
              </p>
            </div>
          </div>

          <!-- Image section -->
          <div class="w-full sm:w-1/2 flex justify-center items-center">
            <div class="w-full max-w-xs">
              <img src="../assets/profile-pic.png" alt="Kavin G" 
                class="w-full border-double border-4 p-2 border-cyan-800"
                transition:fade={{ delay: 400 }}>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>
