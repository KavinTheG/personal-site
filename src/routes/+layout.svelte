<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import About from "../components/About.svelte";
    import Projects from "../components/Projects.svelte";
    import Contact from "../components/Contact.svelte";
    import Experience from "../components/Experience.svelte";

    let title = "Kavin Gnanapandithan"
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="background py-10">
    <Navbar/> 
    <div class="margins">

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

<style>
    .margins {
        padding-left: 20%;
        padding-right: 20%;
    }

    @media (max-width: 740px) {
        .margins {
            padding-left: 15%;
            padding-right: 15%;
        }
    }
</style>

