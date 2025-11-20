<script lang="ts">
	import projects from '$lib/Projects';
	import openSourceContributions from '$lib/OpenSource';
	import Icon from '@iconify/svelte';
	import '../../app.css';
</script>

<div class="page-wrapper">
	<div class="container">
		<div class="two-column-layout">
			<!-- Left Column: Projects -->
			<div class="column">
				<h1 class="page-title">Projects</h1>
				<div class="projects-list">
					{#each projects as project}
						<div class="project-card">
							<div class="image-container">
								<img src={project.imageSrc} alt={project.title} class="project-image" />
							</div>
							<div class="content-container">
								<h2 class="project-title">{project.title}</h2>

								{#if project.tag?.length}
									<div class="project-tags">
										{#each project.tag as tag}
											<span class="tag">{tag}</span>
										{/each}
									</div>
								{/if}

								<p class="project-description">{project.description}</p>

								<div class="project-links">
									{#if project.githubLink}
										<a
											href={project.githubLink}
											target="_blank"
											class="github-link"
											rel="noopener noreferrer"
										>
											<Icon icon="mdi:github" width="24" height="24" />
										</a>
									{/if}

									{#if project.blogLink}
										<a
											href={project.blogLink}
											target="_blank"
											rel="noopener noreferrer"
											class="github-link"
										>
											<Icon icon="mdi:blog" width="24" height="24" />
										</a>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right Column: Open Source Contributions -->
			<div class="column">
				<h1 class="os-page-title">Open Source Contributions</h1>
				<div class="opensource-section">
					{#each openSourceContributions as contribution}
						<div class="contribution-block">
							<h2 class="repo-title">{contribution.repo}</h2>
								<div class="repo-tags">
										{#if contribution.tag?.length}
											{#each contribution.tag as tag}
												<span class="tag">{tag}</span>
											{/each}
										{/if}
                </div>

							<!-- Tags for entire repo (above PRs) -->
							{#if contribution.prs.some((pr) => pr.tag?.length)}
								<div class="repo-tags">
									{#each contribution.prs as pr}
										{#if pr.tag?.length}
											{#each pr.tag as tag}
												<span class="tag">{tag}</span>
											{/each}
										{/if}
									{/each}
								</div>
							{/if}

							{#each contribution.prs as pr}
								<div class="pr-block">
									<a href={pr.link} target="_blank" rel="noopener noreferrer" class="pr-title">
										{pr.title}
									</a>
									<ul class="notes-list">
										{#each pr.notes as note}
											<li>{note}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
<style>
	:global(body) {
		background: var(--eerie-black);
		color: var(--bright-blue);
		margin: 0;
		padding: 0;
	}
	.page-wrapper {
		min-height: 100vh;
		padding: 2rem 1rem;
		padding-bottom: 120px; /* Space for footer */
	}
	.container {
		max-width: 1400px;
		width: 100%;
		margin: 0 auto;
		padding: 0 1rem; /* Add explicit padding */
	}

	.two-column-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	@media (max-width: 1024px) {
		.two-column-layout {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.page-wrapper {
			padding: 1.5rem 0.75rem; /* Reduced but still has padding */
		}
		
		.container {
			padding: 0 0.75rem; /* Ensure side padding on mobile */
		}
		
		.two-column-layout {
			gap: 2rem;
		}
		
		.project-card,
		.contribution-block {
			padding: 20px; /* Slightly reduced card padding on mobile */
		}
	}

	@media (max-width: 480px) {
		.page-wrapper {
			padding: 1rem 0.5rem;
		}
		
		.container {
			padding: 0 0.5rem;
		}
		
		.project-card,
		.contribution-block {
			padding: 18px;
		}
		
		.page-title,
		.os-page-title {
			font-size: 1.75rem; /* Slightly smaller on very small screens */
		}
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	.page-title {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--bright-blue);
		font-weight: 600;
	}
	.os-page-title {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--vista-blue);
		font-weight: 600;
	}
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.project-card {
		background: rgba(150, 217, 212, 0.05);
		color: var(--bright-blue);
		padding: 25px;
		border-radius: 15px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
		display: flex;
		flex-direction: column;
		gap: 15px;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}
	.project-card:hover {
		transform: translateY(-6px);
		background: rgba(150, 217, 212, 0.1);
	}
	.image-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.project-image {
		width: 100%;
		max-height: 200px;
		object-fit: contain;
		border-radius: 10px;
	}
	.content-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.project-title {
		margin: 0;
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--bright-blue);
	}
	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.project-links {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		margin-top: 1rem;
	}
	.tag {
		display: inline-block;
		padding: 4px 12px;
		background: rgba(189, 147, 249, 0.15);
		color: var(--plum-web);
		border: 1px solid var(--plum-web);
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 500;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
		cursor: default;
	}
	.tag:hover {
		background: rgba(189, 147, 249, 0.25);
		transform: translateY(-2px);
	}
	.project-description {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: rgba(150, 217, 212, 0.9);
		text-align: left;
	}
	.github-link {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--bright-blue);
		text-decoration: none;
		font-size: 0.9rem;
		transition: 
			color 0.2s ease,
			transform 0.2s ease;
	}
	.github-link:hover {
		color: var(--plum-web);
		transform: scale(1.15);
	}
	/* Open Source Contributions Styles - Vista Blue theme */
	.opensource-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.contribution-block {
		background: rgba(147, 154, 222, 0.08);
		padding: 25px;
		border-radius: 15px;
		border: 1px solid rgba(147, 154, 222, 0.2);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}
	.contribution-block:hover {
		transform: translateY(-4px);
		background: rgba(147, 154, 222, 0.12);
		box-shadow:
			0 8px 20px rgba(0, 0, 0, 0.5),
			0 0 15px rgba(147, 154, 222, 0.2);
	}
	.repo-title {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--vista-blue);
		margin-bottom: 0.75rem;
	}
	.repo-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 1rem;
	}
	.pr-block {
		margin-bottom: 1.5rem;
		padding-left: 1rem;
		border-left: 2px solid rgba(147, 154, 222, 0.3);
	}
	.pr-block:last-child {
		margin-bottom: 0;
	}
	.pr-title {
		display: block;
		font-size: 0.95rem;
		color: var(--vista-blue);
		text-decoration: none;
		margin-bottom: 0.5rem;
		transition: color 0.2s ease;
		font-weight: 500;
	}
	.pr-title:hover {
		color: var(--lapis-lazuli);
	}
	.notes-list {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin: 0;
		color: rgba(147, 154, 222, 0.85);
	}
	.notes-list li {
		font-size: 0.85rem;
		line-height: 1.5;
		margin-bottom: 0.5rem;
	}
	.notes-list li:last-child {
		margin-bottom: 0;
	}
	.notes-list li::marker {
		color: var(--vista-blue);
	}
</style>
