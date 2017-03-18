import React, { Component } from 'react';

class SongDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: ''
        }
    }

    render() {
        return (
            <div key={this.props.id}>
                <img src={this.props.img} alt=""/>
                <h3>{this.props.trackName}</h3>
                <h6>{this.props.artists.map( artist => {return artist.name})}</h6>
                <audio id={this.props.id} src={this.props.url}></audio>
            </div>
        );
    }

}

export default SongDetails;
