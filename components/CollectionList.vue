<template>
  <div>
    <section class="gifsList" v-if="collection.length !== 0" >
      <div class="gifsList--item" v-for="(item, index) in collection" :key="index">
          <div>
            <!-- Optei por utilizar a tag <video> para poder usar a imagem em formato reduzido em .mp4 que a api fornece, pois o gif inserido através da tag <img>, mesmo sendo downsized, praticamente cada imagem tinha 1mb, então deixava a aplicação lenta. -->
            <video :src="item.image" class="gifsList--item--gif" autoplay loop></video>
            <div class="gifsList--item--info">
              <h2>{{ item.title }}</h2>
              <button type="button" class="btnDefault white" @click.prevent="removeToCollection(item.id)"><img src="/images/heart-complete.svg" title="Adicionar a coleção" alt="Coleção">Remover da coleção</button>
            </div>
            
          </div>
      </div>
    </section>
    <section class="gifsList justifyContentCenter" v-else>
      <h2>Não há gifs salvos em sua coleção :(</h2>
    </section>
  </div>
</template>
<script>
export default {
  props: [
    'collection'
  ],
  methods: {
    setCollection (data) {
      this.$store.commit('setCollection', data);
    },
    removeToCollection(id) {
      const filteredData = this.collection.filter(gif => gif.id !== id);
      this.setCollection(filteredData);
      if(process.browser) {
        localStorage.setItem("collection", JSON.stringify(this.collection));
      }
    },
  },
}
</script>