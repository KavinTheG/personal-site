<script lang="ts">
	import '../app.css';
	import favicon from'$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

<Navbar />

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	main {
		padding: 0;
		padding-bottom: 100px; /* Space for fixed footer */
	}
</style>
