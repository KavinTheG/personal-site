<script lang="ts">
	import { onMount } from 'svelte';
	import typewriter from '$lib/transitions/typewriter';
	import skills from '$lib/Skills';
	import Navbar from '../components/Navbar.svelte';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>
<div class="about-wrapper">
	<div class="about-container">
    <div class="text-section">
    	{#if show}
    		<h1 in:typewriter={{ speed: 100 }}>Hi. I'm Kavin.</h1>
    	{/if}
    	<div class="text-content">
    		<p>
    			I'm a computer engineering graduate. I enjoy writing software that leverages knowledge of
    			hardware.
    		</p>
    		<p>
    			Take a look at my projects to get a feel. I also write about my projects on my blog too!
    		</p>
    	</div>
    </div>
		<div class="image-section">
			<img src="/assets/profile.png" alt="Kavin Bala" />
		</div>
	</div>
</div>
<style>
	.about-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		width: 100%;
		background-color: var(--eerie-black);
		padding: 2rem 1rem;
	}
	.about-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		max-width: 1000px;
		width: 100%;
		padding: 1rem;
	}
	.text-section {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
	}
  	.text-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	p {
		font-size: 1.5rem;
		line-height: 1.6;
		color: var(--bright-blue);
		margin: 0;
	}
	h1 {
		font-size: 3.5rem;
		margin-bottom: 1.5rem;
		color: var(--bright-blue);
	}
	.image-section {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 300px;
		height: 300px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
	}
	@media (max-width: 768px) {
		.about-wrapper {
			padding: 2rem 1.5rem; /* Increased side padding */
		}
		.about-container {
			flex-direction: column;
			text-align: center;
			gap: 2.5rem;
			padding: 1rem; /* Increased padding */
		}
		.text-section {
			align-items: center;
			padding: 0 1rem; /* Added explicit padding for text */
		}
		h1 {
			font-size: 2.5rem;
			margin-bottom: 1rem;
		}
		p {
			font-size: 1.125rem;
			padding: 0 0.5rem; /* Added padding to paragraph */
		}
		img {
			width: 200px;
			height: 200px;
		}
	}
	@media (max-width: 480px) {
		.about-wrapper {
			padding: 1.5rem 1.25rem; /* More breathing room on small screens */
		}
		.about-container {
			padding: 0.75rem;
		}
		.text-section {
			padding: 0 0.75rem; /* Extra padding for very small screens */
		}
		h1 {
			font-size: 2rem;
			margin-bottom: 0.75rem;
		}
		p {
			font-size: 1rem;
			line-height: 1.5;
			padding: 0 0.5rem; /* Ensure text has breathing room */
		}
		img {
			width: 180px;
			height: 180px;
		}
	}
</style>
