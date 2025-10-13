<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cva } from 'class-variance-authority';
	import { cn } from '$lib/utils';
	import '../app.css';
	let className: string | undefined = undefined;
	export { className as class };
	export let magnification: number = 60;
	export let distance: number = 140;
	export let direction: 'top' | 'middle' | 'bottom' = 'bottom';
	const dockVariants = cva(
		'w-max h-[80px] p-4 flex gap-6 rounded-2xl bg-background/80 backdrop-blur-md'
	);
	let dockElement: HTMLDivElement;
	let mouseX = Infinity;
	function handleMouseMove(e: MouseEvent) {
		mouseX = e.pageX;
	}
	function handleMouseLeave() {
		mouseX = Infinity;
	}
	let dockClass = cn(dockVariants(), className, {
		'items-start': direction === 'top',
		'items-center': direction === 'middle',
		'items-end': direction === 'bottom'
	});
</script>

<Motion let:motion>
	<div
		use:motion
		bind:this={dockElement}
		on:mousemove={(e) => handleMouseMove(e)}
		on:mouseleave={handleMouseLeave}
		class={dockClass}
		style="border: 1px solid rgba(150, 217, 212, 0.2);"
		role="navigation"
		aria-label="Footer navigation"
	>
		<slot {mouseX} {magnification} {distance} />
	</div>
</Motion>

<style>
	:global(.backdrop-blur-md) {
		backdrop-filter: blur(12px);
	}
</style>
