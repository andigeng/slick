import React from 'react';
import ReactDOM from 'react-dom';
import { Messages, Channels } from '../container';


class MainChat extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-3">
                        <Channels />
                    </div>
                    
                    <div className="col-md-9">
                        <Messages />
                    </div>

                </div>
            </div>
        );
    }
}


ReactDOM.render(<MainChat />, document.getElementById('main-chat')); 