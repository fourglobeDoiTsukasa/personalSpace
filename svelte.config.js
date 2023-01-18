import adapter from '@sveltejs/adapter-netlify';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: preprocessor(),
};

export default config;
