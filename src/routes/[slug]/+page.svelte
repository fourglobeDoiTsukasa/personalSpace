<script>
  export let data;
</script>

<section>
  {#each data.repeat_field as repeat_field}
    {#if repeat_field.fieldId === 'title'}
      <div>
        <h2>{repeat_field.title}</h2>
      </div>
    {/if}

    {#if repeat_field.fieldId === 'text'}
      <div>
        <p>{@html repeat_field.text}</p>
      </div>
    {/if}

    {#if repeat_field.fieldId === 'image'}
      <div class="big_iamge"><img src={repeat_field.image.url} alt="" /></div>
    {/if}

    {#if repeat_field.fieldId === 'iamge_and_text'}
      <div class="flex">
        <div class="img">
          <img src={repeat_field.image.url} alt="" />
        </div>
        <div class="text">
          <p>{@html repeat_field.text}</p>
        </div>
      </div>
    {/if}

    {#if repeat_field.fieldId === 'text_and_image'}
      <div class="flex">
        <div class="img">
          <img src={repeat_field.image.url} alt="" />
        </div>
        <div class="text">
          <p>{@html repeat_field.text}</p>
        </div>
      </div>
    {/if}
  {/each}
</section>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    display: block;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .img {
    width: 48%;
  }
  .text {
    width: 48%;
  }

  section > div {
    padding-top: clamp(1.875rem, 1.023rem + 3.64vw, 3.75rem);
  }
  section > div:first-child {
    padding-top: 0;
  }
</style>
