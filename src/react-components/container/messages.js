import React from 'react';

import { Message, CreateMessage } from '../presentation';
import { API } from '../../utils';

import styles from './styles';



class Messages extends React.Component {
    constructor(){
        super();
        this.state = { list:[] }
    }

    componentDidMount(){
        API.get('api/message', {}, (error, response) => {
            if (error){
                console.log('FAILED' + error);
                return;
            }
            this.setState( {list:response.result} );
        });
    }

    sendMessage(newMessage){
        API.post('api/message', newMessage, (error, response) => {
            if (error){
                console.log('ERROR: ', error);
                return;
            }
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(newMessage);
            this.setState( {list: updatedList} );
        });
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
                <br />
                <CreateMessage onSend={this.sendMessage.bind(this)}/>
            </div>

        );
    }
}


export default Messages;


