import Color from 'color';
import * as types from '../constants/action_types';
import playlistData from './playlistData';

export function fetchSongs() {
    return {
        type: types.FETCH_SONGS,
        payload: {
            data: playlistData
        }
    };
}

export function changeColor(color) {
    const darkerColor = Color(color).darken(0.5);
    const darker = darkerColor.rgb().string();
    const darkerAlpha = darkerColor.rgb().alpha(0.5).string();

    return {
        type: types.CHANGE_COLOR,
        payload: {
            dominant: color,
            darker: darker,
            shadow: darkerAlpha,
        }
    };
}
