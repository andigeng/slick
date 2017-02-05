import React from 'react';
import styles from './styles';


class Message extends React.Component{
    render(){
        let name = this.props.messageInfo.name;
        let body = this.props.messageInfo.body;
        let style = styles.message;

        return(
            <div>
                <span style={style.name} >{name}</span>
                {'\u00A0\u00A0\u00A0\u00A0'}
                <p style={style.body}>{body}</p>
            </div>
        );
    }
}

export default Message;