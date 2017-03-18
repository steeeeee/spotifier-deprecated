import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action
import { fetchSongs } from '../actions/index';

class SongsList extends Component {
    componentWillMount() {
        this.props.fetchSongs();
    }

    renderSong(item) {
        const albumImg = item.track.album.images[1].url

        return (
            <div key={item.track.id}>
                <img src={albumImg} alt=""/>
                <h3>{item.track.name}</h3>
                <h6>{item.track.artists.map( artist => {return artist.name})}</h6>
                <audio src={item.track.preview_url} controls></audio>
            </div>
        );
    }

    render() {
        if (!this.props.songs.tracks) {
            return <div>Loading...</div>;
        }
        return (
            <div className="horizontal-scroll-wrapper">{this.props.songs.tracks.items.map(this.renderSong)}</div>
        );
    }
}

function mapStateToProps(state) {
    return { songs: state.songs };
}


export default connect(mapStateToProps, { fetchSongs })(SongsList);


