<script lang="ts">
	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';
	import projects from '$lib/Projects';
	import { colours } from '$lib/Colours';

	const id = () => '_' + Math.random().toString(36).substr(2, 9);
	let items = projects.map((project, i) => ({
		id: id(),
		data: project,
		5: gridHelp.item({ x: 0, y: i * 2, w: 2, h: 2 }),
		3: gridHelp.item({ x: 0, y: i * 2, w: 2, h: 2 }),
		1: gridHelp.item({ x: 0, y: i * 2, w: 1, h: 2 })
	}));
	const cols = [
		[1100, 5],
		[800, 3],
		[500, 1]
	];
</script>

<div class="page-wrapper">
	<div class="container">
		<h1 class="grid-instruction">Drag on the bottom right to expand!</h1>
		<Grid bind:items rowHeight={100} {cols} let:item let:dataItem>
			<div class="grid-item">
				<h3>{dataItem.data.title}</h3>
			</div>
		</Grid>
	</div>
</div>

<style>
	.page-wrapper {
		background: var(--background);
		min-height: 100vh;
		padding: 2rem 1rem;
	}

	.container {
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
	}

	.grid-instruction {
		font-size: 1.5rem;
		text-align: left;
		margin-bottom: 1.5rem;
		color: var(--accent);
		font-weight: 500;
	}

	.grid-item {
		background: rgba(150, 217, 212, 0.05);
		color: var(--accent);
		padding: 25px 20px;
		border-radius: 15px;
		border: 2px solid var(--accent);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
		height: 100%;
		box-sizing: border-box;
		cursor: pointer;
	}

	.grid-item h3 {
		margin: 0;
		font-size: 1.3rem;
		font-weight: 600;
	}

	.grid-item:hover {
		transform: translateY(-6px);
		background: rgba(150, 217, 212, 0.1);
		box-shadow:
			0 12px 25px rgba(0, 0, 0, 0.5),
			0 0 20px rgba(150, 217, 212, 0.3);
	}

	:root {
		--background: #0e1317;
		--accent: #96d9d4;
	}

	:global(body) {
		background: var(--background);
		margin: 0;
		padding: 0;
	}
</style>
