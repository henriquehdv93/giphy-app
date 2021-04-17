<template>
  <div>
    <div class="appContainerInner">
      <Ordering v-if="collection.length" />
      <Btn href="/" title="Pesquisar mais gifs"/>
    </div>
    <div class="">
      <CollectionList :collection="collection" />
    </div>
  </div>
</template>
<script>
import Ordering from '../components/Ordering.vue'
import Btn from '../components/Btn.vue'
import CollectionList from '../components/CollectionList.vue'
export default {
  components: {
    Ordering,
    Btn,
    CollectionList,
  },
  computed: {
    collection: {
      get () {
        return this.$store.state.collection
      },
      set (value) {
        this.$store.commit('setCollection', value)
      }
    },
  },
  methods: {
    setCollection (data) {
      this.$store.commit('setCollection', data);
    },
  },
  mounted() {
    let collectionSaved;
    if(process.browser) {
        collectionSaved = JSON.parse(localStorage.getItem("collection"));
    }
    if(collectionSaved === null) {
      this.setCollection(Array());
    }
    else {
      this.setCollection(collectionSaved);
    }
    
  }
}
</script>