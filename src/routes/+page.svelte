<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="POST">
	<label>
		Letters
		<input type="text" name="letters" value={form?.letters ?? ''} />
	</label>
	<button type="submit">Find Anagrams</button>
</form>

{#if form?.anagrams}
	<ul>
		{#each form.anagrams as anagram}
			<li>{anagram}</li>
		{/each}
	</ul>
{/if}
