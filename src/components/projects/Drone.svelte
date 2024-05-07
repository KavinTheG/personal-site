<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";

  export let marginValue;

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
        <div transition:fade={{ delay: 200 }} class=" my-10 flex flex-col justify-center items-center">
            <!-- Project  cards -->

            <div class=" card rounded-2xl flex justify-center items-center {marginValue}">
                <div class=" card-wrapper background_secondary rounded-2xl z-10">        
                        <div class="project-info  min-h-0 min-w-0">
                            <!-- image -->
                            <div class="image-container">
                                <img src="../assets/drone.png" alt="project image" aria-hidden="true">
                            </div>

                            <!-- description -->
                            <div class="w-1/2 min-w-0 flex flex-col mx-8">
                                <h1 class="text-3xl secondary pt-8">Embedded Rust Flight Controller</h1>
                                
                                <p class="secondary pt-4">
                                    This projects aims to achieve reliable flight performance with a custom built flight controller. It is built on top of the STM32F411
                                    and a Rust-based real-time framework, RTIC (Real-Time Interrupt-Driven Concurrency).
                                </p>

                                <!-- Githug link -->
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
            </div>
            
            
        </div>
    {/if}
  </div>
</IntersectionObserver>


<style>
    .project-info {
        display: flex;
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
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes animate {
    50% {
        filter: hue-rotate(60deg);
    }
}

@keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.card {
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 340px;
    align-items: center;
    overflow: hidden;

    border-radius: rounded-2xl;
    padding: 0.05rem;

}

.card:hover::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 120%;
    height: 120%;
    background: linear-gradient(#caf0fa, #00d9ff);
    animation: fade 0.1s linear forwards,
                animate 3s linear infinite;
}



.card-wrapper {
    position: relative;   
    display: flex;
    justify-content: center;
    align-items: center;
}



</style>