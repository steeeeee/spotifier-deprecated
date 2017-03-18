import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action
import { fetchSongs } from '../actions/index';

// Components
import SongDetails from './song_details';

class SongsList extends Component {
    componentWillMount() {
        this.props.fetchSongs();
    }

    renderSong(item) {
        const data = item.track;
        const id = data.id;

        return (
            <SongDetails key={id}
                id={id}
                img={data.album.images[0].url}
                trackName={data.name}
                url={data.preview_url}
                artists={data.artists} />
        );
    }

    render() {
        if (!this.props.songs.tracks) {
            return <div>Loading...</div>;
        }
        return (
            <div
                style={this.props.color ? {backgroundColor: this.props.color.dominant} : ''}
                className="horizontal-scroll-wrapper">{this.props.songs.tracks.items.map(this.renderSong)}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        songs: state.songs,
        color: state.color
    };
}


export default connect(mapStateToProps, { fetchSongs })(SongsList);


