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

		const updateActiveHeading = () => {
			const isAtBottom =
				window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
			if (isAtBottom) {
				activeId = headings.at(-1)?.id ?? headings[0].id;
				return;
			}

			const threshold = window.innerHeight * 0.3;
			const visibleHeading = headings.find((heading) => {
				const top = heading.getBoundingClientRect().top;
				return top >= 0 && top <= threshold;
			});
			const previousHeading = headings
				.filter((heading) => heading.getBoundingClientRect().top < 0)
				.at(-1);

			activeId = (visibleHeading ?? previousHeading ?? headings[0]).id;
		};

		const observer = new IntersectionObserver(updateActiveHeading, {
			rootMargin: "0px 0px -70% 0px"
		});
		let scrollFrame = 0;
		const handleScroll = () => {
			if (scrollFrame) return;
			scrollFrame = requestAnimationFrame(() => {
				scrollFrame = 0;
				updateActiveHeading();
			});
		};

		for (const heading of headings) observer.observe(heading);
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
			if (scrollFrame) cancelAnimationFrame(scrollFrame);
		};
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
