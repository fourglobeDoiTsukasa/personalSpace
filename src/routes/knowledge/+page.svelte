<script>
  import { each } from 'svelte/internal';

  export let data;
</script>

<ul>
  {#each data.contents as content}
    {#if content.category.name == 'ナレッジ共有'}
      <li>
        <a href="/"><h3>{content.title}</h3></a>
        <div class="category">
          <div class="category-knowledge">{content.category.name}</div>
        </div>
      </li>
    {/if}
  {/each}
</ul>

<style>
  h3 {
    display: inline;
  }
</style>
