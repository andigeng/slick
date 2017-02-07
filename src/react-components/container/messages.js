import React from 'react';

import { Message, CreateMessage } from '../presentation';
import { API } from '../../utils';

import styles from './styles';



class Messages extends React.Component {
    constructor(){
        super();
        this.state = {       //_id for 'general'
            list:[],
            channelId: ''
        }
    }

    componentDidMount(){
        this.setState({channelId:this.props.channelId});
        this.populateNewList(this.props.channelId);
        this.checkUpdate();    
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.channelId !== this.props.channelId){
            this.populateNewList(nextProps.channelId);
            this.setState({channelId:nextProps.channelId});
        }
    }

    populateNewList(channelId){
        const channelUrl = 'api/channel/' + channelId;
        API.get(channelUrl, {}, (error, response) => {
            if (error){
                console.log('FAILED' + error);
                return;
            }
            const messageIdArray = response.result.messages;
            const filledList = [];
            if (messageIdArray.length === 0) {
                this.setState({list:[]});
            } else {
                for (var i=0; i < messageIdArray.length; i++) {
                    const messageUrl = 'api/message/' + messageIdArray[i];
                    API.get(messageUrl, {}, (error, response) => {
                        if (error){
                            console.log('FAILED' + error);
                            return;
                        }
                        filledList.push(response.result);
                        this.setState( {list: filledList} );
                    });
                }    
            }
        });
    }

    sendMessage(newMessage){
        API.post('api/message', newMessage, (error, response) => {
            if (error){
                console.log('ERROR: ', error);
                return;
            }
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.result);
            this.setState( {list: updatedList} );
            const url = 'api/channel/' + this.state.channelId;
            API.put(url,
                    ({$push: {messages: response.result._id}}),
                    (err, res) => {
                        if (err){
                            console.log('error: ', err);
                        }
                    });
        });
    }

    checkUpdate(){
        setTimeout( () => {
            const url = 'api/channel/' + this.state.channelId;
            API.get(url, {}, (error, response) => {
                if (error){
                    console.log('error: ', error);
                    return;
                }
                const channelMessages = response.result.messages;
                const numMessagesNow = this.state.list.length;
                console.log(numMessagesNow);
                const numMessagesNew = response.result.messages.length;
                if (numMessagesNow !== numMessagesNew) {
                    console.log('theres eben a change!!!!') 
                    for (var i = numMessagesNow; i < numMessagesNew; i++){
                        console.log(i);
                        this.pushMessageToScreen(channelMessages[i]);
                        console.log(channelMessages[i]);
                    }
                }
            });
            console.log('heyo');
            this.checkUpdate();
        }, 250);
    }

    pushMessageToScreen(messageId){
        const url = '/api/message/' + messageId;
        API.get(url, {}, (error, response) => {
            if (error){
                console.log('error: ', error);
                return;
            }
            console.log('THE CURERNT STATE???', this.state.list);
            const filledList = Object.assign([], this.state.list);
            console.log(response.result);
            filledList.push(response.result);
            this.setState({list: filledList})
            console.log(this.state.list);
        });
    }

    render(){
        const messages = this.state.list.map((message, i) =>  {
            return (
                <li key={i}><Message messageInfo={message} /></li>
            );
        });

        return (
            <div>
                <ul style={styles.cleanList}> {messages} </ul>
                <br />
                <CreateMessage onSend={this.sendMessage.bind(this)}/>
            </div>

        );
    }
}


export default Messages;



        // let newChat = {
        //     name:'synthetic',
        //     user_ids: 'No one yet',
        //     messages: [
        //         '5896a2cf12cfdc196492a4ef',
        //         '5896a2dc12cfdc196492a4f0',
        //         '5896a3b09b0fdc37702c4dc5',
        //         '5896b0e5b86b9a2cb84bc738'
        //     ]
        // };

        // API.post('api/channel', newChat, (error, response) => {
        //     return;
        // });

