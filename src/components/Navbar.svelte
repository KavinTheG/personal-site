<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import Icon from '@iconify/svelte';

	const currentPath = derived(page, ($page) => $page.url.pathname);
	const links = [
		{ href: '/', label: 'home' },
		{ href: '/projects', label: 'projects' },
		{ href: 'https://blog.kaving.me/blog', label: 'blog', external: true }
	];

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="navbar">
	<div class="navbar-content">
		<div class="prompt">
			<a href="/" class="prompt-link">
				<span class="user">kavin@me</span>:<span class="dir">~</span>$
			</a>
		</div>

		<!-- Desktop Links -->
		<div class="links desktop-links">
			{#each links as link, i}
				{#if i > 0}
					<span class="slash">/</span>
				{/if}
				<a href={link.href} class:active={$currentPath === link.href}>{link.label}</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button class="mobile-menu-button" onclick={toggleMenu} aria-label="Toggle menu">
			<Icon icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'} width="24" height="24" />
		</button>
	</div>

	<!-- Mobile Menu Dropdown -->
	{#if mobileMenuOpen}
		<div class="mobile-menu">
			{#each links as link}
				<a href={link.href} class:active={$currentPath === link.href} onclick={closeMenu}>
					/{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	.navbar {
		background-color: var(--eerie-black);
		color: var(--bright-blue);
		padding: 1rem 0;
		width: 100%;
	}
	.navbar-content {
		max-width: 1000px;
		width: 100%;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.prompt {
		font-weight: 500;
		color: var(--bright-blue);
	}

	.prompt-link {
		text-decoration: none;
		color: inherit;
		transition: opacity 0.2s ease;
	}

	.prompt-link:hover {
		opacity: 0.7;
		cursor: pointer;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	/* Mobile menu button - hidden by default */
	.mobile-menu-button {
		display: none;
		background: none;
		border: none;
		color: var(--bright-blue);
		cursor: pointer;
		padding: 0.5rem;
		transition: opacity 0.2s ease;
	}

	.mobile-menu-button:hover {
		opacity: 0.7;
	}

	/* Mobile dropdown menu - hidden by default */
	.mobile-menu {
		display: none;
	}

	a {
		text-decoration: none;
		color: var(--bright-blue);
		transition:
			color 0.2s ease,
			opacity 0.2s ease;
		padding: 0 0.25rem;
	}
	a:hover {
		opacity: 0.7;
	}
	a.active {
		font-weight: 600;
		color: var(--plum-web);
	}
	.slash {
		font-weight: 500;
		color: var(--bright-blue);
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		.navbar-content {
			padding: 0 1rem;
		}

		/* Hide desktop links */
		.desktop-links {
			display: none;
		}

		/* Show mobile menu button */
		.mobile-menu-button {
			display: block;
		}

		/* Mobile dropdown menu */
		.mobile-menu {
			display: flex;
			flex-direction: column;
			background-color: var(--eerie-black);
			border-top: 1px solid rgba(150, 217, 212, 0.1);
			max-width: 1000px;
			margin: 0 auto;
			padding: 1rem 2rem;
			gap: 1rem;
		}

		.mobile-menu a {
			padding: 0.75rem 0;
			font-size: 1.1rem;
			border-bottom: 1px solid rgba(150, 217, 212, 0.05);
		}

		.mobile-menu a:last-child {
			border-bottom: none;
		}
	}
</style>
