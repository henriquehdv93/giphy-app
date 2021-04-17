<template>
  <div class="btnWrap">
    <a :href="href" class="btnDefault black large">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: [
    'href', 'title'
  ]
}
</script>