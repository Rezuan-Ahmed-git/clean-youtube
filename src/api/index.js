import axios from "axios";

const key = 'AIzaSyCukegE0KbkB6D7JXEf4vtfu1eMNjnBeq8';

const getPlaylist = async (playlistId, pageToken='', result=[]) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=${playlistId}&key=${key}&maxResults=50&pageToken=${pageToken}`

    const {data} = await axios.get(URL);
    result =  [...result,...data.items]
    if (data.nextPageToken) {
        result =  getPlaylist(playlistId, data.nextPageToken, result);
    }

    return result;

}

export default getPlaylist;