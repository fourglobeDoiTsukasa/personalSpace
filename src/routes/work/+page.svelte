<script>
  import { each } from 'svelte/internal';

  export let data;
</script>

<div class="title">
  <h2>作業資料</h2>
</div>
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
  h3 {
    display: inline;
  }
  .post-area {
    margin-top: 30px;
  }
  .title {
    display: inline-block;
    background-color: rgb(255, 255, 255);
    padding: 4px 24px;
    border-radius: 24px;
    box-shadow: 4px 4px 12px #aaa, inset -2px -2px 4px #ccc,
      inset 0 0 4px #f1f1f1;
  }
</style>
