<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";
  import ProjectDetail from "./reusable/ProjectDetail.svelte";

  /**
     * @type {HTMLDivElement}
     */
  let node;

  const droneProject = {
    imageSrc: '../assets/drone.png',
    title: 'Rust-based Flight Controller',
    description: `This projects aims to achieve reliable flight performance with a custom built flight controller. 
                  It is built on top of the STM32F411 and a Rust based real-time framework, RTIC (Real-Time Interrupt-Driven Concurrency).`,
    githubLink: 'https://github.com/KG-Drone-Project/'
  };

  const uoavProject = {
    imageSrc: '../assets/uoav.png',
    title: 'Embedded Team Lead @ UOttawa Autonomous Vehicle Team',
    description: `Responsible for leading the embedded portion of the UOAV autonomous snowplow. Primary achievement was the communication between the Jetson Xavier ROS2 Nav2 and the HDC2460 motor drivers `,
    githubLink: 'https://github.com/KG-Drone-Project/'
  };

  const pychessProject = {
    imageSrc: '../assets/pychess.png',
    title: 'PyChess',
    description: `PyChess is a Python-based chess game developed using the Pygame library. This project aims to enhance coding skills and tackle the complexities of creating a functional chess game. 
                  This project makes use of concepts from data structures and algorithms for optimal time and space complexity.`,
    githubLink: 'https://github.com/KavinTheG/PyChess'
  }

  let githubHover = false;
</script>

<header />

<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div class="min-h-screen flex flex-col justify-center items-center" transition:fade={{ delay: 500 }}>
        <h1 class="text-5xl my-10 secondary">My Projects</h1>
          <div class="">
            <!-- Drone -->
            <ProjectDetail  
              imageSrc={droneProject.imageSrc}
              title={droneProject.title}
              description={droneProject.description}
              githubLink={droneProject.githubLink}
            />
           
            <!-- UOAV -->
            <!-- ProjectDetail 
              imageSrc={uoavProject.imageSrc}
              title={uoavProject.title}
              description={uoavProject.description}
              githubLink={uoavProject.githubLink}
            /> -->

            <!-- Python chess -->
            <ProjectDetail
              imageSrc={pychessProject.imageSrc}
              title={pychessProject.title}
              description={pychessProject.description}
              githubLink={pychessProject.githubLink}
            />

          </div>
          <!-- Add more components here -->
        </div>

    {/if}
  </div>
</IntersectionObserver>
