<script>
  import { each } from 'svelte/internal';

  export let data;
</script>

<ul>
  {#each data.contents as content}
    {#if content.category.name == 'その他の情報'}
      <li>
        <a href="/"><h3>{content.title}</h3></a>
        <div class="category">
          <div class="category-information">{content.category.name}</div>
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
