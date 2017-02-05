import React from 'react';

import { Channel, CreateChannel } from '../presentation'
import { API } from '../../utils'

import styles from './styles';



class Channels extends React.Component{
    constructor(){
        super();
        this.state = { 
            list:[], 
            selected:0 
        };
    }

    componentDidMount(){
        API.get('/api/channel', {}, (error, response) => {
            if (error){
                console.log('FAILED' + error);
                return;
            }
            this.setState( {list:response.result} )
        });
    }

    createChannel(newChannel){
        API.post('/api/channel', newChannel, (error, response) => {
            if (error){
                console.log('ERROR: ', error);
                return;
            }
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.result);
            this.setState( {list:updatedList} );
        });
    }

    selectChannel(index){
        this.setState( {selected:index} );
        this.props.onChange(this.state.list[index]._id);
    }

    render(){
        const style = styles.channels;

        const channels = this.state.list.map((channel, i) => 
            <li key={i}>
            
                <Channel    
                    index={i}
                    selected={i==this.state.selected} 
                    channelInfo={channel}
                    onSelect={this.selectChannel.bind(this)} />
            </li>
        );

        return (
            <div style={style.defaultStyle}>
                <ul style={styles.cleanList}>
                    {channels}
                </ul>
                <CreateChannel onCreate={this.createChannel.bind(this)}/>
            </div>
        );
    }
}


export default Channels;


