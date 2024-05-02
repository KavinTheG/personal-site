<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import About from "../components/About.svelte";
    import Projects from "../components/Projects.svelte";

</script>

    <Navbar />
<div class="background px-20 py-10">


    <section id="about">
        <About/>
    </section>

    <section id="projects">
    <Projects/>
    </section>
</div>
<slot />