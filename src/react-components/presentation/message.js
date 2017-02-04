import React, { Component } from 'react';
import styles from './styles';


class Message extends Component {
    render(){
        let name = this.props.messageInfo.name;
        let body = this.props.messageInfo.body;
        let timestamp = this.props.messageInfo.timestamp;

        let style = styles.message;

        return(
            <div>
                <span style={style.name} >{name}</span>
                {'\u00A0\u00A0\u00A0'}
                <span>{timestamp}</span><br />
                <p>{body}</p>
            </div>
        );
    }
}

export default Message;