<template>
  <div>
    <div class="appContainerInner">
      <Search />
      <Btn href="/collection/" title="Ver sua coleção"/>
    </div>
    <div class="">
      <GifsList />
    </div>
  </div>
</template>
<script>
import Search from '../components/Search.vue'
import Btn from '../components/Btn.vue'
import GifsList from '../components/GifsList.vue'
export default {
  components: {
    Search,
    Btn,
    GifsList,
  },
}
</script>