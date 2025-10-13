<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let mouseX: number;
	export let magnification: number = 60;
	export let distance: number = 140;

	let ref: HTMLDivElement;
	let distanceCalc = Infinity;

	$: if (ref && mouseX !== undefined) {
		const rect = ref.getBoundingClientRect();
		const itemCenter = rect.left + rect.width / 2;
		distanceCalc = mouseX - itemCenter;
	}

	$: widthSync = 40;
	$: width =
		distanceCalc === Infinity
			? widthSync
			: Math.max(
					widthSync,
					widthSync + (magnification - widthSync) * (1 - Math.abs(distanceCalc) / distance)
				);
</script>

<Motion let:motion>
	<div use:motion bind:this={ref} style="width: {width}px; height: {width}px;" class="dock-item">
		<slot />
	</div>
</Motion>

<style>
	.dock-item {
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			width 0.2s ease,
			height 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.2s ease;
		border-radius: 10px; /* optional, makes highlight softer */
	}

	.dock-item:hover {
		transform: scale(1.15); /* slight magnify effect */
	}
</style>
