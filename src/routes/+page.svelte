<script>
  export let data;
  import List from './components/atoms/list/List.svelte';
  import { each } from 'svelte/internal';
</script>

<div class="title">
  <h2>最新情報一覧</h2>
</div>
<div class="post-area">
  <ul>
    {#each data.contents as content}
      <li class="category-list">
        <a href={content.id}>
          <h3>{content.title}</h3>
        </a>
        {#if content.category.name == 'ナレッジ共有'}
          <div class="category">
            <div class="category-knowledge">{content.category.name}</div>
          </div>
        {/if}
        {#if content.category.name == '作業資料'}
          <div class="category">
            <div class="category-work">{content.category.name}</div>
          </div>
        {/if}
        {#if content.category.name == 'その他の情報'}
          <div class="category">
            <div class="category-information">{content.category.name}</div>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  h2 {
    display: inline-block;
  }
  h3 {
    display: inline-block;
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
