<script>
  import { createEventDispatcher } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";

  export let imageSrc;
  export let title;
  export let description;
  export let githubLink;

  let githubHover = false;
</script>


<div class="mb-12 flex flex-col justify-center items-center">
    <!-- Project cards -->
    <div class="card rounded-2xl flex justify-center items-center z-12">
        <div class="card-wrapper background_secondary rounded-2xl z-10">
            <div class="project-info min-h-0 min-w-0">
                <!-- image -->
                <div class="image-container">
                    <img src={imageSrc} alt="project image" aria-hidden="true">
                </div>
                <!-- description -->
                <div class="description">
                    <h1 class="text-3xl secondary pt-[1.5rem]">{title}</h1>
                    <p class="secondary pt-4">{description}</p>
                    <!-- Github link -->
                    <div class="flex flex-col justify-between items-center mt-auto mb-5">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" 
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

<style>
    .project-info {
        display: flex;
        flex-direction: row;
        border-radius: 5px;
    }

    .image-container {
        flex: 0 0 auto;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .image-container img {
        padding: 1.5rem;
        
        height: auto;
    }

    .description {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;

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
        align-items: center;
        overflow: hidden;
        border-radius: rounded-2xl;
        padding: 0.05rem;
        min-width: 350;
    }

    .card:hover::before {
        content: "";
        position: absolute;;
        z-index: 10;
        width: 120%;
        height: 120%;
        background: linear-gradient(#caf0fa, #00d9ff);
        animation: fade 0.1s linear forwards,
                    animate 3s linear infinite;
    }

    .card-wrapper {
        position: relative;
        display: flex;
        z-index: 12;
        margin: 0.05rem;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1200px) {
        .project-info {
            flex-direction: column; /* Change to column on small screens */
        }

        .image-container {
            width: 100%; /* Image takes full width */
            order: -1; /* Make sure the image is on top */
        }

        .description {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
</style>
