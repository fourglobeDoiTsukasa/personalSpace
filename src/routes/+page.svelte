<script>
  export let data;
  import List from './components/atoms/list/List.svelte';
  import { each } from 'svelte/internal';
</script>

<ul>
  {#each data.contents as content}
    <li>
      <a href={content.id}>
        <h3 style="display: inline;">{content.title}</h3>
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

<style>
  li {
    margin-bottom: 30px;
  }
  .category {
    margin-left: calc(40 / 1920 * 100%);
    width: 100px;
    font-size: 12px;
    color: #111;
    font-weight: 500;
  }
  .category-knowledge {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #66e8c8;
    box-shadow: 1px 1px 4px #999, inset -2px -2px 4px #61c9b1,
      inset 0 0 4px #98dbcb;
    padding: 2px 10px;
    border-radius: 10px;
  }
  .category-work {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #72c0ea;
    box-shadow: 1px 1px 4px #999, inset -2px -2px 4px #65a3c4,
      inset 0 0 4px #b4e5ff;
    padding: 2px 10px;
    border-radius: 10px;
  }
  .category-information {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f48ae1;
    box-shadow: 1px 1px 4px #999, inset -2px -2px 4px #c865b6,
      inset 0 0 4px #f5a1e6;
    padding: 2px 10px;
    border-radius: 10px;
  }
</style>
