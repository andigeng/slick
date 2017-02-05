import React from 'react';
import styles from './styles';


class Channel extends React.Component{

    selectChannel(event){
        event.preventDefault();
        this.props.onSelect(this.props.index);
    }

    render(){
        let name = this.props.channelInfo.name;
        let style = styles.channel;
        let channel = (this.props.selected) ?
            <a style={style.selected} href="#"> #{name}</a> :
            <a style={style.notSelected} href="#"> #{name}</a>;

        return(
            <div>
                <span onClick={this.selectChannel.bind(this)}>
                    {channel}
                </span>
            </div>
        );
    }
}


export default Channel;

