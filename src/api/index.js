import axios from "axios";



const getPlaylist = async (playlistId, pageToken='', result=[]) => {
    const key = import.meta.env.VITE_YOUTUBE_API_KEY;
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=${playlistId}&key=${key}&maxResults=50&pageToken=${pageToken}`

    const {data} = await axios.get(URL);
    result =  [...result,...data.items]
    if (data.nextPageToken) {
        result =  getPlaylist(playlistId, data.nextPageToken, result);
    }

    return result;

}

export default getPlaylist;