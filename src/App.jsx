import CssBaseline from '@mui/material/CssBaseline';
import { Container, Stack } from '@mui/system';
import Navbar from './components/navbar';
import PlaylistCardItem from './components/playlist-card-item';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
  const { playlists, error, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={'lg'} sx={{ marginTop: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />

        {playlistArray.length > 0 && (
          <Stack direction={'row'} spacing={4}>
            {playlistArray.map((item) => (
              <PlaylistCardItem
                key={item.id}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            ))}
          </Stack>
        )}
      </Container>
    </>
  );
};

export default App;
