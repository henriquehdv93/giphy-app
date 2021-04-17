export const state = () => ({
  gifsList: [],
  collection: [],
});
export const mutations = {
  setGifList (state, gifsList) {
    state.gifsList = gifsList
  },
  setCollection (state, collection) {
    state.collection = collection
  },
}