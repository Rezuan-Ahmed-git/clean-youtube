import { createStore } from 'easy-peasy';
import favoriteModel from './favorite-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';

const store = createStore({
  playlist: playlistModel,
  recents: recentModel,
  favorites: favoriteModel,
});

export default store;
