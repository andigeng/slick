import React from 'react';
import styles from './styles'



class CreateMessage extends React.Component{
   constructor(){
        super();
        this.state = {
            message: {
                name:'',
                body:''
            }
        }
   }

   updateMessage(event){
        const updatedMessage = Object.assign({}, this.state.message);
        updatedMessage[event.target.id] = event.target.value;
        this.setState( {message:updatedMessage} );
    }

    sendMessage(){
        console.log('HI!@@@');
        this.props.onSend(this.state.message);
        this.setState( {message:{name:'', body:''}});
    }

    render(){
        const style = styles;

        return (
            <div className="form-group">
                <span className="input-group">
                    <button     
                        className="btn btn-secondary btn-lg" 
                        onClick={this.sendMessage.bind(this)}
                        style={{fontSize:18}}>
                        Send 
                    </button>
                    <textarea
                        className="form-control form-horizontal"
                        value={this.state.message.body}
                        onChange={this.updateMessage.bind(this)} 
                        rows="1"
                        style={{fontSize:18}}
                        placeholder="Enter your message here!"
                        id="body"/>
                </span>
                <br />
                Placeholder inputs: login has yet to be implemented
                <input  
                    className="form-control"
                    value={this.state.message.name}
                    onChange={this.updateMessage.bind(this)} 
                    placeholder="Temporary name"
                    id="name" /> 
            </div>
        );
    }
}


export default CreateMessage;