<script>
  import Image from '../../atoms/image/Image.svelte';
  import Title from '../../atoms/title/Heading_level3.svelte';
  import Text from '../../atoms/text/Text.svelte';

  // Image.svelte
  export let src;
  export let alt;
  export let classImage;

  // HeadingLevel3.svelte
  export let headingLevel3;
  export let classHeadingLevel3;

  // Text.svelte
  export let text;
  export let classText;
</script>

<div>
  <Image {classImage} {src} {alt} />
  <Title {classHeadingLevel3} {headingLevel3} />
  <Text {classText} {text} />
</div>

<style>
  div {
    width: 30%;
  }
</style>
