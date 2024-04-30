<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import About from "../components/About.svelte";
    import Project from "../components/Project.svelte";

</script>

<div class="background px-20 py-10">
    <Navbar />
    <About/>
    <Project/>
</div>
<slot />