<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";
  import Drone from "./projects/Drone.svelte";

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
        <div class="h-screen flex flex-col justify-center items-center" transition:fade={{ delay: 1000 }}>
            <h1 class="text-5xl pb-10 secondary">My Projects & Experience</h1>
            
            <Drone />

        </div>
    {/if}
  </div>
</IntersectionObserver>
