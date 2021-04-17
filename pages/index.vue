<template>
  <div>
    <Header />
    <main class="appContainer mainPadding bgWhite rounded">
      <div class="appContainerInner">
        <Search />
        <Btn href="/collection/" title="Ver sua coleção"></Btn>
      </div>
      <div class="">
        <GifsList />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Search from '../components/Search.vue'
import Btn from '../components/Btn.vue'
import GifsList from '../components/GifsList.vue'
export default {
  components: {
    Header,
    Footer,
    Search,
    Btn,
    GifsList,
  },
}
</script>