import { useEffect } from 'react';
import getPlaylist from './api';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
  const { getPlaylistById, playlists, error, loading } = usePlaylists();

  useEffect(() => {
    getPlaylistById('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS');
  }, []);

  console.log('Playlists:', playlists);

  return <div>App</div>;
};

export default App;
