<template>
  <header class="header">
    <div class="appContainer">
      <div class="logo">
        <img :src="logo.url" :alt="logo.alt" :title="logo.title" />
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