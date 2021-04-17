<template>
  <div class="formDefault">
    <label for="order">Ordenar por:</label>
      <div class="inputBox">
        <select name="order" id="order" class="inputBox--formControl" v-model="order" @change="setOrder($event)">
          <option value="">Selecione</option>
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
        </select>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    order: 0,
  }),
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
    setOrder(event) {
      let data = this.collection;
      let orderedData;
      let orderType = Number(this.order);
      if (orderType === 1) {
        orderedData = data.sort(function (a, b) {
          return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
        });
        this.setCollection(orderedData);
      }
      else if (orderType === 2) {
        orderedData = data.sort(function (a, b) {
          return (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0);
        });
        this.setCollection(orderedData);
      }
    
    } 
  }
}
</script>