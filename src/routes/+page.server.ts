import { findPartialAnagrams } from 'find-partial-anagrams';
import wordList from '$lib/server/word-list';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const letters = data.get('letters');

		const response = {
			success: false,
			letters,
			anagrams: [] as string[],
		};

		if (typeof letters !== 'string') {
			return fail(400, response);
		}

		try {
			response.anagrams = findPartialAnagrams(letters, wordList);
		} catch (err) {
			return fail(400, response);
		}

		response.success = true;

		return response;
	},
} satisfies Actions;
