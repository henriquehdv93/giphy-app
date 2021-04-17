<template>
  <div class="formDefault">
    <form v-on:submit.prevent="submitSearch()">
      <label for="search">Pesquise seu gif:</label>
      <div class="inputBox">
      <input type="search" v-model="search" name="search" placeholder="Ex: Cachorro, Simpson, Memes" class="inputBox--formControl"><button type="submit"><img src="/images/loupe.svg" alt="Lupa da busca" title="Buscar">Pesquisar</button>
    </div>
    </form>
  </div>
</template>
<script>
export default {
  data:() => ({
    search: '',
  }),
  methods: {
    setGifList (data) {
      this.$store.commit('setGifList', data);
    },
    submitSearch() {
      let apiKey = "71usB5XxJ1KpBTkrZset3cAvTKylHrPO";
      let searchEndPoint = "https://api.giphy.com/v1/gifs/search?";
      let limit = 40;
      let url = `${searchEndPoint}&api_key=${apiKey}&q=${
        this.search
      }&limit=${limit}`;
      return this.$axios.$get(url).then((response) => {
          if (response.meta.msg === 'OK') {
            console.log('entrou');
            this.setGifList([]);
            const obj = response.data;
            for (var i in obj) {
                const item = obj[i];
                item.hasAddedToCollection = false;
            }
            this.setGifList(obj);
          }
        })
        .catch((error) => {
        })
    }
  }
}
</script>