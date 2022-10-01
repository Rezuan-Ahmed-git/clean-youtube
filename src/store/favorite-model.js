import { action, persist } from 'easy-peasy';

const favoriteModel = persist({
  items: [],
  addToFavorite: action((state, payload) => {
    state.items.push(payload);
  }),

  removeFromFavorite: action((state, playlistId) => {
    state.items = state.items.filter((pId) => playlistId !== pId);
  }),
});

export default favoriteModel;
