<template>
  <div class="btnWrap">
    <a :href="href" class="btnDefault black">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: [
    'href', 'title'
  ]
}
</script>