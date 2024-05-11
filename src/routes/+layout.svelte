<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import About from "../components/About.svelte";
    import Projects from "../components/Projects.svelte";
    import Contact from "../components/Contact.svelte";

</script>

 
<div class="background px-20 py-10">
    <Navbar/>

    <section id="about">
        <About/>
    </section>

    <section id="projects">
        <Projects/>
    </section>

    <section id="contact">
        <Contact/>
    </section>
</div>
<slot />

<style>
    body {
        background-color: #0b0c10;
    }
</style>