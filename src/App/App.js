import React, {Component} from 'react';
import { Message } from '../Message/Message';
import { TextArea } from '../TextArea/TextArea';
import './App.css'
// Importing Components and css Styling

class  App extends Component {
    ind = 2 // index of message
    state = { // Things that will afect message
        msg_history:
        [
            {ind : 0, text: 'Are You sleeping?', side: true, date: '2:23'},
            {ind : 1, text: 'I was', side: false,date: '2:24'},
        ],
        side: true
        }
    user = this.state.side? 'User 1': 'User 2'

    addMessage = (text) =>{ // adding new message with setState
      if (text===''){
        return null
      }
      const today = new Date()
      const minute =  today.getMinutes().toString().length===1? '0'+today.getMinutes():today.getMinutes()
        const newmsg = {ind : this.ind++, text: text, side: this.state.side, date: today.getHours() + ":" + minute}

        this.setState(({msg_history}) => {
            const new_msg_history = [
                ...msg_history,
                newmsg
            ]
            return {
                msg_history: new_msg_history
            }
        })
    }

    userChange = () => { // changing side of chat with setState
      this.setState(({side}) => {
        return{
          side: !side
        }
      })
    }

    render(){ //rendering App
        return (
    <div className="content container-fluid bootstrap snippets bootdey border border-2">
      <div className="row row-broken">
        <div className="col-sm-15 col-xs-12">
          <div className="col-inside-lg decor-default">
          {this.state.side? <h6> User 1's Chat</h6> : <h6> User 2's Chat</h6>}
            <div className="chat-body">
              <Message new_msg_history={this.state.msg_history}/>
            </div>
            <TextArea onMsgAdded={this.addMessage} ChangeUser={this.userChange}/>
          </div>
        </div>
      </div>
    </div>
        )
    }
}

export {App}