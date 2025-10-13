<script lang="ts">
	import Dock from './Dock.svelte';
	import DockItem from './DockItem.svelte';
	import Icon from '@iconify/svelte';

	const socialLinks = [
		{ icon: 'mdi:github', href: 'https://github.com/KavinTheG', label: 'GitHub' },
		{ icon: 'mdi:linkedin', href: 'https://linkedin.com/in/kavingnanap', label: 'LinkedIn' },
		{ icon: 'mdi:email', href: 'mailto:kavin.balag@gmail.com', label: 'Email' }
	];
</script>

<footer class="footer">
	<Dock magnification={80} distance={140} direction="middle">
		{#snippet children({ mouseX, magnification, distance })}
			{#each socialLinks as link}
				<DockItem {mouseX} {magnification} {distance}>
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.label}
						class="dock-link"
					>
						<Icon icon={link.icon} width="32" height="32" />
					</a>
				</DockItem>
			{/each}
		{/snippet}
	</Dock>
</footer>

<style>
	.footer {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1000;
	}

	.dock-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: var(--bright-blue);
		transition: color 0.2s ease;
	}

	.dock-link:hover {
		color: var(--plum-web);
	}

	:global(:root) {
		--background: #0e1317;
		--bright-blue: #96d9d4;
	}
</style>
