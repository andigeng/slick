import React, { Component } from 'react';
import Message from '../presentation/message';
import styles from './styles'


const placeholder_messages = [
    {
        name: 'swagmaster0',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et enim ut purus tempor faucibus a in mauris. Vestibulum porta et metus vel ullamcorper.',
        timestamp: '10:00 pm',
        channel_id: 'channel 1'
    }, 
    {
        name: 'swagmaster1',
        body: 'Sed at arcu dapibus, rhoncus neque id, feugiat neque. Fusce vitae urna pellentesque, ultrices orci in, molestie ante. Vivamus laoreet maximus consectetur.',
        timestamp: '10:01 pm',
        channel_id: 'channel 1'
    }, 
    {
        name: 'swagmaster2',
        body: 'Ut mattis vitae felis ut auctor. Phasellus dignissim lacus consectetur posuere tempor. Fusce non turpis semper, ultrices metus at, feugiat mi.',
        timestamp: '10:02 pm',
        channel_id: 'channel 1'
    }, 
];


class Messages extends Component {
    constructor(){
        super();
        this.state = { list:placeholder_messages }
    }

    componentDidMount(){
        console.log('mounted!');
        // fetch from API
    }

    render(){
        const messages = this.state.list.map((message, i) => 
            <li key={i}><Message messageInfo={message} /></li>
        );
        return (
            <div>
                <ul style={styles.cleanList}>
                    {messages}
                </ul>
            </div>
        );
    }
}

export default Messages;


