<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="POST">
	<label for="letters-input">Letters</label>
	<input
		id="letters-input"
		type="text"
		name="letters"
		value={form?.letters ?? ''}
		spellcheck="false"
		maxlength="16"
	/>
	<button type="submit">Find Anagrams</button>
</form>

{#if form?.anagrams}
	<ul class="anagrams-list">
		{#each form.anagrams as anagram}
			<li>{anagram}</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	label {
		text-align: center;
	}

	#letters-input {
		text-align: center;
		letter-spacing: 0.5ch;
	}

	.anagrams-list {
		max-width: max-content;
		margin: auto;
		padding: 0;

		li {
			list-style-type: none;
		}
	}
</style>
