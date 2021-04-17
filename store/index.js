export const state = () => ({
  gifsList: [],
});
export const mutations = {
  setGifList (state, gifsList) {
    state.gifsList = gifsList
  },
}