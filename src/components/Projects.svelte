<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";
  import Drone from "./projects/Drone.svelte";
  import Uoav from "./projects/Uoav.svelte";

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
      <div class="h-screen flex flex-col justify-center items-center" transition:fade={{ delay: 500 }}>
        <h1 class="text-5xl pb-10 secondary">My Projects & Experience</h1>
        
        <div class="flex flex-wrap">
          <div class="w-1/2">
            <Drone marginValue="mr-2"/>
          </div>
          <div class="w-1/2">
            <Uoav marginValue="ml-2"/>
          </div>
          

          <!-- Add more components here -->
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>
