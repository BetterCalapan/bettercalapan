<script lang="ts">
	import { onMount } from "svelte";

	type PageSection = {
		id: string;
		name: string;
	};

	let { onThisPage }: { onThisPage: PageSection[] } = $props();
	let activeId = $state("");

	onMount(() => {
		const headings = onThisPage
			.map(({ id }) => document.getElementById(id))
			.filter((heading): heading is HTMLElement => heading !== null);

		if (headings.length === 0) return;

		const hash = window.location.hash.slice(1);
		activeId = headings.some(({ id }) => id === hash) ? hash : headings[0].id;

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleHeading = entries
					.filter(({ isIntersecting }) => isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

				if (visibleHeading) activeId = visibleHeading.target.id;
			},
			{ rootMargin: "0px 0px -70% 0px" }
		);

		for (const heading of headings) observer.observe(heading);

		return () => observer.disconnect();
	});
</script>

<nav aria-labelledby="on-this-page-heading">
	<h2 id="on-this-page-heading">On this page</h2>
	<ul>
		{#each onThisPage as section (section.id)}
			<li>
				<a
					href={`#${section.id}`}
					aria-current={activeId === section.id ? "location" : undefined}
					onclick={() => (activeId = section.id)}>{section.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav,
	ul {
		display: flex;
		flex-direction: column;
	}

	nav {
		gap: 0.5rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	ul {
		gap: 0.5rem;
		padding: 0;
		list-style: none;
	}

	a {
		width: max-content;
		max-width: 100%;
	}

	a:hover,
	a[aria-current="location"] {
		text-decoration: underline;
	}
</style>
