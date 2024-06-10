<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import About from "../components/About.svelte";
    import Projects from "../components/Projects.svelte";
    import Contact from "../components/Contact.svelte";
    import Experience from "../components/Experience.svelte";

</script>


<div class="background py-10">
    <Navbar/> 
    <div class="px-[20%] ">

        <section id="about"> 
            <About/>
        </section> 

        <section id="projects">
            <Projects/>
        </section>

        <section id="experience">
            <Experience/>
        </section>
    </div>
</div>

<slot />

