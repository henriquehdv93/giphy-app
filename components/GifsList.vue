<template>
  <div class="gifsList">
    <div class="gifsList--item" v-for="(item, index) in gifsList" :key="index">
        <img :src="item.images.downsized.url" :alt="item.slug" class="imgFluid gifsList--item--image">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      gifsList: state => state.gifsList,
    })
  }
}
</script>