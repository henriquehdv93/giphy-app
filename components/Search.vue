<template>
  <div class="search">
    <form v-on:submit.prevent="submitSearch()">
      <label for="search">Pesquisar</label>
      <div class="inputBox">
      <input type="search" v-model="search" name="search" placeholder="Ex: Cachorros" class="inputBox--formInput"><button type="submit"><img src="/images/loupe.svg" alt="Lupa da busca" title="Buscar"></button>
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
      let limit = 16;
      let url = `${searchEndPoint}&api_key=${apiKey}&q=${
        this.search
      }&limit=${limit}`;
      return this.$axios.$get(url).then((response) => {
          if (response.meta.msg === 'OK') {
            console.log('entrou');
            this.setGifList(response.data);
          }
        })
        .catch((error) => {
          console.log('erroeeee');
        })
    }
  }
}
</script>