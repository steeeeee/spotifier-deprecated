
import * as types from '../constants/action_types';
import playlistData from 'json-loader!../store/playlistData.json';

//import axios from 'axios';
//import { CLIENT_ID } from '../constants/client_id';

//const API_URL = 'https://api.behance.net/v2/projects?q=&client_id=';

export function fetchSongs() {
    //const url = `${API_URL}${CLIENT_ID}`;
    //const request = axios.get(url);
    console.log(playlistData)

    return {
        type: types.FETCH_SONGS,
        payload: {
            data: playlistData
        }
    };
}
