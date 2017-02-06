import React from 'react';
import ReactDOM from 'react-dom';
import { Messages, Channels } from '../container'


class MainChat extends React.Component{
    constructor(){
        super();
        this.state = ({
            channelId:'589794ff6cff17260c6a9c5a'
        });
    }

    loadMessages(newId){
        //console.log(newId);
        this.setState({channelId: newId})
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-3">
                        <Channels onChange={this.loadMessages.bind(this)}/>
                    </div>
                    
                    <div className="col-md-9">
                        <Messages channelId={this.state.channelId}/>
                    </div>

                </div>
            </div>
        );
    }
}


ReactDOM.render(<MainChat />, document.getElementById('main-chat')); 


