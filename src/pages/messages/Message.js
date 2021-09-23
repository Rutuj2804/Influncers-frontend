import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ContactElement from './ContactElement'
import { fetch_rooms } from '../../store/actions'
import moment from 'moment'

const Message = ({ chat_rooms, username, fetch_rooms }) => {

    const returnChatNameOfOppositeUser = users => {
        var ind;
        users.map((user)=>{
            if(user.username !== username){
                ind = user
            }
            return user
        })
        return ind
    }

    useEffect(()=>{
        fetch_rooms()
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="message__ContactDiv" >
                        <div className="message__InboxTitle">
                            <h4>Inbox</h4>
                        </div>
                        <div className="message__Contacts">
                            {chat_rooms.map((val, key)=>{
                                const user = returnChatNameOfOppositeUser(val.users)
                                return <ContactElement 
                                    key={key}
                                    name={user?.first_name + ' ' + user?.last_name} 
                                    status={user?.status? "online": "offline"} 
                                    time={moment(val.created_at).fromNow()} 
                                    online={user?.status}
                                    message={val.last_message}
                                    roomId={val.id}
                                />
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="message__ConversationDiv">
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    chat_rooms: state.Messages.chat_rooms,
    username: state.Login.username,
})

export default connect(mapStateToProps, { fetch_rooms })(Message)