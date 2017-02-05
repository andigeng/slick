import React from 'react';
import styles from './styles';



class CreateChannel extends React.Component{
    constructor(){
        super();
        this.state = {
            channel: {
                name:''
            }
        };
    }

    updateChannel(event){
        const updatedChannel = Object.assign({}, this.state.channel);
        updatedChannel[event.target.id] = event.target.value;
        this.setState( {channel: updatedChannel} );
    }

    createChannel(){
        this.props.onCreate(this.state.channel);
        this.setState( {channel:{name:''}} );
    }

    render(){
        return(
            <div className="form-group">
                <span className="input-group">
                    <button className="btn btn-secondary"
                            onClick={this.createChannel.bind(this)}>
                        Make
                    </button>
                    <input  className="form-control"
                            placeholder="New Channel"
                            id="name"
                            onChange={this.updateChannel.bind(this)}
                            value={this.state.channel.name}>
                    </input>
                </span>
            </div>
        );
    }
}


export default CreateChannel;