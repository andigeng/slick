import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        console.log('hello?');
    }

    render(){
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nunc sed vulputate ornare. In ullamcorper, justo id vehicula gravida, sapien sem accumsan metus, eget aliquam elit velit fringilla orci. Morbi vitae faucibus nisl.
                </p>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root')); 