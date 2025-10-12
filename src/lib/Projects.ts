// src/lib/Projects.ts

export interface Project {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    imageSrc: "../assets/drone.png",
    title: "Rust-based Flight Controller",
    description: `This project aims to achieve reliable flight performance with a custom built flight controller. 
                  It is built on top of the STM32F411 and a Rust based real-time framework, RTIC (Real-Time Interrupt-Driven Concurrency).`,
    githubLink: "https://github.com/KG-Drone-Project/",
  },
  {
    imageSrc: "../assets/motor_controller.gif",
    title: "Embedded Team Lead @ UOttawa Autonomous Vehicle Team",
    description: `Responsible for leading the embedded portion of the UOAV autonomous snowplow. Primary contribution was the integration of ROS2_control with custom C++ drivers 
                  to control the HDc2460 motor drivers.`,
    githubLink: "https://github.com/uOttawaCAV/ros-workspace/",
  },
  {
    imageSrc: "../assets/nes.png",
    title: "NES Emulator",
    description: `Nintendo Entertainment System (NES) Emulator written in C. Features a cycle-accurate 6502 microprocessor capable of all legal instructions. Accurately 
                  replicates the PPU for authentic graphics, and employs digital signal processing (DSP) techniques for accurate audio.`,
    githubLink: "https://github.com/KavinTheG/chip8",
  },
  {
    imageSrc: "../assets/chip8.png",
    title: "CHIP-8 Emulator",
    description: `Emulator written in C capable of emulating every CHIP-8 instruction.
                  The binary can be used to play any CHIP-8 ROM with this project.`,
    githubLink: "https://github.com/KavinTheG/chip8",
  },
  {
    imageSrc: "../assets/pychess.png",
    title: "PyChess",
    description: `PyChess is a Python-based chess game developed using the Pygame library. This project aimed to improve my coding skills by tackling the complexities of creating a functional chess game. 
                  I made use of concepts from data structures and algorithms for optimal time and space complexity.`,
    githubLink: "https://github.com/KavinTheG/PyChess",
  }
];

export default projects;

