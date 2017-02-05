import React from 'react';
import { Message, CreateMessage } from '../presentation';
import styles from './styles';
import { API } from '../../utils';


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

    submitMessage(newMessage){
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
                <CreateMessage onSubmit={this.submitMessage.bind(this)}/>
            </div>

        );
    }
}

export default Messages;


