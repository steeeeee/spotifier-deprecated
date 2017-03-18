import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import RGBaster from '../../node_modules/rgbaster.js/rgbaster';
import { changeColor } from '../actions/index';


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
        const cc = this.props.changeColor;
        const image = this.imageToParse;

        RGBaster.colors(image, {
            paletteSize: 30,
            exclude: ['rgb(0,0,0)', 'rgb(255,255,255)'],
            success: function(payload){
                cc(payload.dominant);
            }
        });

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
        if (!this.props.url) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <img
                    ref={(image) => { this.imageToParse = image; }}
                    onMouseOver={this.onHover}
                    onMouseLeave={this.onOut}
                    src={this.props.img}
                    style={this.state.hovering ? {boxShadow: `0px 18px 59px 1px ${this.props.color.shadow}`} :  {boxShadow: `0px 4px 11px 0px ${this.props.color.shadow}`}}
                    />
                <div className={this.state.hovering ? 'info active' : 'info'}>
                    <h3 style={this.props.color ? {backgroundColor: this.props.color.darker} : ''}>{this.props.trackName}</h3>
                </div>
                <div className={this.state.hovering ? 'info active' : 'info'}>
                    <h6 style={this.props.color ? {backgroundColor: this.props.color.darker} : ''}>
                        {this.props.artists.map( artist => {return artist.name;})}</h6>
                </div>
                <Sound
                    url={this.props.url}
                    playStatus={this.state.playStatus}
                    volume={this.state.volume} />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { color: state.color };
}

export default connect(mapStateToProps, { changeColor })(SongDetails);
