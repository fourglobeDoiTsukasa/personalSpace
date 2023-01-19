<script>
  import { each } from 'svelte/internal';

  export let data;
</script>

<h2>作業資料</h2>
<div class="post-area">
  <ul>
    {#each data.contents as content}
      {#if content.category.name == '作業資料'}
        <li>
          <a href="/"><h3>{content.title}</h3></a>
          <div class="category">
            <div class="category-work">{content.category.name}</div>
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style>
  h2 {
    display: inline;
    border-bottom: 2px solid rgb(255, 138, 138);
  }

  h3 {
    display: inline;
  }
  .post-area {
    margin-top: 30px;
  }
</style>
