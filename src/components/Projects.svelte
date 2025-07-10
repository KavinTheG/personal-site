<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade } from "svelte/transition";
  import ProjectDetail from "./reusable/ProjectDetail.svelte";

  /**
   * @type {HTMLDivElement}
   */
  let node;

  const droneProject = {
    imageSrc: "../assets/drone.png",
    title: "Rust-based Flight Controller",
    description: `This projects aims to achieve reliable flight performance with a custom built flight controller. 
                  It is built on top of the STM32F411 and a Rust based real-time framework, RTIC (Real-Time Interrupt-Driven Concurrency).`,
    githubLink: "https://github.com/KG-Drone-Project/",
  };

  const uoavProject = {
    imageSrc: "../assets/motor_controller.gif",
    title: "Embedded Team Lead @ UOttawa Autonomous Vehicle Team",
    description: `Responsible for leading the embedded portion of the UOAV autonomous snowplow. Primary contribution was the integration of ROS2_control with custom C++ drivers 
                  to control the HDc2460 motor drivers `,
    githubLink: "https://github.com/uOttawaCAV/ros-workspace/",
  };

  const nesEmu = {
    imageSrc: "../assets/nes.png",
    title: "NES Emulator",
    description: `Nintendo Entertainment System (NES) Emulator written in C. Feature a cycle accurate 6502 microprocessor capable of all legal instructions. Accurately 
                  replicates the PPU for authentic graphics, and employs digital signal processing (DSP) techniques for accurate audio.`,

    githubLink: "https://github.com/KavinTheG/chip8",
  };

  const chip8Emu = {
    imageSrc: "../assets/chip8.png",
    title: "CHIP-8 Emulator",
    description: `Emulator written in C capable of emulating every CHIP-8 instruction.
                  The binary can be used to play any chip8 rom with this project.`,
    githubLink: "https://github.com/KavinTheG/chip8",
  };

  const pychessProject = {
    imageSrc: "../assets/pychess.png",
    title: "PyChess",
    description: `PyChess is a Python-based chess game developed using the Pygame library. This project aimed to improve my coding skills by tackling the complexities of creating a functional chess game. 
                  I made use of concepts from data structures and algorithms for optimal time and space complexity.`,
    githubLink: "https://github.com/KavinTheG/PyChess",
  };

  let githubHover = false;
</script>

<header />

<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div
        class="min-h-screen flex flex-col justify-center items-center"
        transition:fade={{ delay: 500 }}
      >
        <h1 class="text-5xl my-10 secondary">My Projects</h1>
        <div class="project-box">
          <!-- Drone -->
          <ProjectDetail
            imageSrc={droneProject.imageSrc}
            title={droneProject.title}
            description={droneProject.description}
            githubLink={droneProject.githubLink}
          />

          <!-- UOAV -->
          <ProjectDetail
            imageSrc={uoavProject.imageSrc}
            title={uoavProject.title}
            description={uoavProject.description}
            githubLink={uoavProject.githubLink}
          />

          <!-- NES -->
          <ProjectDetail
            imageSrc={nesEmu.imageSrc}
            title={nesEmu.title}
            description={nesEmu.description}
            githubLink={nesEmu.githubLink}
          />

          <!-- CHIP8 -->
          <ProjectDetail
            imageSrc={chip8Emu.imageSrc}
            title={chip8Emu.title}
            description={chip8Emu.description}
            githubLink={chip8Emu.githubLink}
          />

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

<style>
  .project-box {
    width: 80%;
  }

  @media (max-width: 740px) {
    .project-box {
      width: 98%;
    }
  }
</style>
