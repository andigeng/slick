import React, { Component } from 'react';
import Channel from '../presentation/channel'
import styles from './styles';


const placeholder_channels = [
    {
        name: 'general',
        selected: false
    }, 
    {
        name: 'design',
        selected: true
    }, 
    {
        name: 'random',
        selected: false
    }
];


class Channels extends Component {
    constructor(){
        super();
        this.state = { list:placeholder_channels }
    }

    componentDidMount(){
        console.log('mounted!');
        // fetch from API
    }

    render(){
        const style = styles.channels;

        const channels = this.state.list.map((channel, i) => 
            <li key={i}><Channel selected={channel.selected} channelInfo={channel} /></li>
        );

        return (
            <div style={style.defaultStyle}>
                <div style={style.title}>CHANNELS</div>
                <ul style={styles.cleanList}>
                    {channels}
                </ul>
            </div>
        );
    }
}

export default Channels;


