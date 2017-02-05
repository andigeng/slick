import React from 'react';
import styles from './styles';


class Channel extends React.Component {
    render(){
        let name = this.props.channelInfo.name;
        let style = styles.channel;
        let selected = this.props.selected ? 'selected' : 'notSelected';

        return(
            <div style={style[selected]}>
                <span style={style.name} >#{name}</span>
            </div>
        );
    }
}

export default Channel;

