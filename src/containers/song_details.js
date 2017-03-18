import React, { Component } from 'react';
import Sound from 'react-sound';

class SongDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovering: false,
            playStatus: 'STOPPED',
            volume: 0
        };

        this.onHover = this.onHover.bind(this);
        this.onOut = this.onOut.bind(this);
    }

    onHover() {
        this.setState({
            hovering: true,
            playStatus: 'PLAYING'
        });

        // FADE IN
        const start     = 0;
        const end       = 100;
        const duration  = 10000; // In milliseconds (divide by 1000 to get seconds).
        const framerate = 10; // In milliseconds (divide by 1000 to get seconds).

        const toAdd = ( ( end - start ) * framerate ) / duration;


        const interval = setInterval( () => {
            let currentValue = this.state.volume;

            if (currentValue >= end) {
                clearInterval(interval);
                return;
            }

            this.setState({
                volume: !isNaN(currentValue) == true ? currentValue + toAdd : toAdd
            });
        }, framerate);

    }

    onOut() {
        this.setState({
            hovering: false,
            playStatus: 'PAUSED'
        });
    }

    render() {
        return (
            <div>
                <img
                    onMouseOver={this.onHover}
                    onMouseLeave={this.onOut}
                    src={this.props.img}/>
                <div className={this.state.hovering ? 'info active' : 'info'}><h3>{this.props.trackName}</h3></div>
                <div className={this.state.hovering ? 'info active' : 'info'}><h6>{this.props.artists.map( artist => {return artist.name;})}</h6></div>
                <Sound
                    url={this.props.url}
                    playStatus={this.state.playStatus}
                    volume={this.state.volume} />
            </div>
        );
    }

}

export default SongDetails;
