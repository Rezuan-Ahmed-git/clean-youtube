import { useEffect } from 'react';
import getPlaylist from './api';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();
  useEffect(() => {
    // getPlaylist('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS').then((res) =>
    //   console.log(res)
    // );

    getPlaylistById('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS');
  });

  console.log('Playlist', playlists);

  return <div>App</div>;
};

export default App;
