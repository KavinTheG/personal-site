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
<div class="flex flex-col justify-center">
    <div class="flex-1 flex justify-center items-center">
        <div class="w-1/2">
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

        <div class="flex-1">
            <!-- Image div -->
            <div class="h-full flex justify-center items-center ">
                <img src="../assets/profile-pic.png" alt="Kavin G" 
                class=" w-3/5 border-double border-4 p-2 border-cyan-800"
                transition:fade={{ delay: 400 }}>
            </div>
        </div>
    </div>
</div>

    {/if}
  </div>
</IntersectionObserver>