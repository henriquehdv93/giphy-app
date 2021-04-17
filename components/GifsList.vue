<template>
  <div>
    <section class="gifsList" v-if="gifsList.length !== 0">
      <div class="gifsList--item" v-for="(item, index) in gifsList" :key="index">
          <div>
            <!-- Optei por utilizar a tag <video> para poder usar a imagem em formato reduzido em .mp4 que a api fornece, pois o gif inserido através da tag <img>, mesmo sendo downsized, praticamente cada imagem tinha 1mb, então deixava a aplicação lenta. -->
            <video :src="item.images.downsized_small.mp4" class="gifsList--item--gif" autoplay loop></video>
            <div class="gifsList--item--info">
              <h2>{{ item.title }} {{ item.hasAddedToCollection }}</h2>
              <button type="button" :class="{ addedFromCollection: item.hasAddedToCollection }" class="btnDefault white bordered" @click.prevent="sendToCollection(item)" :title="item.hasAddedToCollection ? 'Adicionado a coleção!' : 'Adicionar a coleção'">
                <img :src="item.hasAddedToCollection ? '/images/heart-white.svg' : '/images/heart.svg'" title="Coração" alt="Coleção">
                  {{ item.hasAddedToCollection ? 'Adicionado a coleção!' : 'Adicionar a coleção' }}
                </button>
            </div>
          </div>
      </div>
    </section>
    <section class="gifsList justifyContentCenter alignItemsCenter" v-else>
      <h2>Faça uma pesquisa para carregar os gifs!</h2>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data:() => ({
    collection: [],
  }),
  computed: {  
    ...mapState({
      gifsList: state => state.gifsList,
    })
  },
  methods: {
    sendToCollection(data) {
      const id = data.id;
      const image = data.images.downsized_small.mp4;
      const title = data.title;
      const item = {
        id: id,
        image: image,
        title: title,
      }
      this.collection.push(item);
      const obj = this.gifsList;
      for (var i in obj) {
        const gifsListItem = obj[i];
        if(gifsListItem.id === id) {
          gifsListItem.hasAddedToCollection = true;
        }
      }
      // eu particularmente usaria uma biblioteca de cookie como o js-cookie neste caso, por ser possível ler os dados tanto no server-side do nuxt.js quanto no client-side do browser. Porém, como na tarefa pedia localStorage ou indexedDB, vou usar localStorage somente no client-side.
      if(process.browser) {
        localStorage.setItem("collection", JSON.stringify(this.collection));
      }
    }
  },
  mounted() {
    if(process.browser) {
      const content = JSON.parse(localStorage.getItem("collection"));
      console.log(content);
      return;
      if (content === null) {
        this.collection = Array();
      }
      else {
        this.collection = content;
      }
    }
  },
  
}
</script>