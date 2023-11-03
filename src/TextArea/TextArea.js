import React, {Component} from 'react';
import './TextArea.css'
// Importing Components and css Styling

class  TextArea extends Component { // TextArea Component
    state = {
        text: ''
    }
    m = (e) =>{
        this.setState({text: e.target.value})
        // Changing text value to add new message to chat
    }
    submit = () => {
        this.props.onMsgAdded(this.state.text)
        this.setState({text: ''})
    }

    render(){
        return (
        <div className='answer-add'>
            <textarea onChange={this.m} rows={3} value={this.state.text}></textarea>
            <div class="btn-group" role="group">
                <button type='button' className='answer-btn btn me-3' onClick={()=>this.submit()}>Send</button>{/*onClick calls onMsgAdded function with text in App.js to add new message*/}
                <button type='button' className='answer-btn btn me-1' onClick={()=>this.props.ChangeUser()}>Change User</button> {/*onClick calls ChangeUser function in App.js to change user*/}
            </div>
        </div>)
    }
    
}


export {TextArea}