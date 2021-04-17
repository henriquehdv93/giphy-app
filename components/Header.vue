<template>
  <header class="header">
    <div class="appContainer">
      <div class="logo">
        <a href="/" title="Voltar para a página inicial"><img :src="logo.url" :alt="logo.alt" :title="logo.title" /></a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data: () => ({
    logo: {
      url: "/images/giphy.jpg",
      alt: "Giphy Logo",
      title: "Giphy",
    },
  }),
};
</script>