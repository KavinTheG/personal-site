<script lang="ts">
	import { onMount } from 'svelte';
	import typewriter from '$lib/transitions/typewriter';
	import skills from '$lib/Skills';
	import { colours } from '$lib/Colours'; // <-- import your color config

	let show = false;

	onMount(() => {
		show = true;
	});
</script>

<div class="about-wrapper" style="background-color: {colours.background}; color: {colours.accent};">
	<div class="about-container">
		<div class="text-section">
			{#if show}
				<h1 in:typewriter={{ speed: 100 }}>Hi. I'm Kavin.</h1>
			{/if}

			<p>
				I'm a computer engineering graduate. I enjoy writing software that leverages knowledge of
				hardware. This includes embedded software, compilers, etc. Take a look at my projects to get
				a feel. I also write about my projects on my blog too!
			</p>
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
		height: 100vh;
		width: 100%;
	}

	.about-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		max-width: 1000px;
		padding: 1 rem;
	}

	.text-section {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
	}

	h1 {
		font-size: 3.5rem;
		margin-bottom: 1.5rem;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.6;
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
		.about-container {
			flex-direction: column;
			text-align: center;
			gap: 2rem;
		}
		.text-section {
			align-items: center;
		}
		img {
			width: 200px;
			height: 200px;
		}
	}
</style>
