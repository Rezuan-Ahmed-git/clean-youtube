import { Key } from "@mui/icons-material";
import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken='', result=[]) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=${playlistId}&key=${key}&maxResults=50&pageToken=${pageToken}`

    const {data} = await axios.get(URL);
    result =  [...result,...data.items]
    if (data.nextPageToken) {
        result =  getPlaylist(playlistId, data.nextPageToken, result);
    }

    return result;

}

const getPlaylist = async (playlistId) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`

    const {data} = await axios.get(URL);
    let playlistItems = await getPlaylistItem(playlistId);

    const { channelId, title: playlistTitle, description: playlistDescription, thumbnails, channelTitle } = data?.items[0]?.snippet;

    playlistItems = playlistItems.map((item) => {
      const {
        title,
        description,
        thumbnails: { medium },
      } = item.snippet;

      return {
        title,
        description,
        thumbnails: medium,
        contentDetails: item.contentDetails,
      };
    });

    return {
        playlistId,
        playlistTitle,
        playlistDescription,
        playlistThumbnail: thumbnails.default,
        channelId,
        channelTitle,
        playlistItems

    }
}

export default getPlaylist;