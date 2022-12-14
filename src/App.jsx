import { Grid, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import Navbar from './components/navbar';
import PlaylistCardItem from './components/playlist-card-item';
import usePlaylists from './hooks/usePlaylists';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

const playlistID = 'PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl';

const Homepage = ({ playlistArray }) => {
  const playlist = useStoreActions((actions) => actions.playlist);

  useEffect(() => {
    playlist.getPlaylist(playlistID);
  }, []);

  return (
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
      <Grid container alignItems="stretch">
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const current = playlists[playlistId];

  console.log('Current Course -->', current);

  if (!current) return;

  return (
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        {current.playlistTitle}
      </Typography>
      <Typography variant="body1" align="center">
        {current.playlistDescription}
      </Typography>
    </Container>
  );
};

const NotFound = () => (
  <Container maxWidth={'lg'} sx={{ my: 16 }}>
    <Typography variant="h2" align="center">
      404 Page Not Found
    </Typography>
  </Container>
);

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();
  console.log(playlists);

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<Homepage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
