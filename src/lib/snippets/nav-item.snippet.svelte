<script module lang="ts">
	import type { ListItemProps } from '$lib/types/nav-menu.types';
	import { NavigationMenu } from 'bits-ui';
	import { resolve } from '$app/paths';

	export { navItem };
</script>

{#snippet navItem({ name, url }: ListItemProps)}
	<li>
		<NavigationMenu.Link href={resolve(url)}>
			<div>{name}</div>
		</NavigationMenu.Link>
	</li>
{/snippet}
