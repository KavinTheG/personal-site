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
      <div class="min-h-screen flex flex-col justify-center items-center" transition:fade={{ delay: 500 }}>
        <h1 class="text-5xl mt-10 secondary">My Projects & Experience</h1>
        
          <Drone/>
          <Uoav/>

          <!-- Add more components here -->
        </div>

    {/if}
  </div>
</IntersectionObserver>
