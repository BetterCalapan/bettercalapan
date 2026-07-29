<script module lang="ts">
	export { ListItem };
</script>

<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import type { ListItemProps } from '$lib/types/navigation-menu.types';
</script>

{#snippet ListItem({ name, url }: ListItemProps)}
	<li>
		<NavigationMenu.Link href={url}>
			<div>{name}</div>
		</NavigationMenu.Link>
	</li>
{/snippet}
