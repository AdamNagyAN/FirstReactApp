import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    changeMessage = () =>{
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.changeMessage.bind(this)}>Click me!</button> */}
                {/* <button onClick={() => this.changeMessage()}>Click me!</button> */}
                <button onClick={this.changeMessage}>Click me!</button>
            </div>
        )
    }
}

export default EventBind
