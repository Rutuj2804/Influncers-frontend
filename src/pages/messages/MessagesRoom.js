import { Avatar, Button, IconButton } from '@material-ui/core'
import { BlockRounded, MoreVertRounded, PersonRounded, ReportProblemRounded, SendRounded } from '@material-ui/icons'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { SocketContext } from '../../store/socket/context'
import ContactElement from './ContactElement'
import MessageElement from './MessageElement'
import { connect } from 'react-redux'
import { fetch_messages, send_message, clear_chat_room_id, set_seen_messages } from '../../store/actions'
import moment from 'moment'

const MessagesRoom = ({ match, username, chat_rooms, fetch_messages, opposite_user, messages, send_message, clear_chat_room_id, set_seen_messages }) => {

    const [ message, setMessage ] = useState('')

    const [ messagesOfRoom, setMessagesOfRoom ] = useState([])

    const id = match.params.id

    const socket = useContext(SocketContext)
    
    const [ profilePopup, setProfilePopup ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const messageElement = {
            "user": {"username": username},
            "text": message,
            "id": id
        }
        console.log(messageElement)
        send_message(message, id)
        socket.emit('send-message', messageElement)
        // setMessagesOfRoom([...messagesOfRoom, messageElement])
        setMessage('')
    }

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>{
        clear_chat_room_id()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    socket.on('recieve-message', data=>{
        setMessagesOfRoom([...messagesOfRoom , data])
    })

    useEffect(()=>{
        setMessagesOfRoom(messages)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    useEffect(()=>{
        fetch_messages(id)
        set_seen_messages(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        scrollToBottom()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, messagesOfRoom]);

    const returnChatNameOfOppositeUser = users => {
        var ind;
        users.map((user)=>{
            if(user.username !== username){
                ind = user
            }
            return user;
        })
        return ind
    }

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
                                    time={moment(val.last_conversaion).fromNow()} 
                                    online={user?.status}
                                    message={val.last_message}
                                    roomId={val.id}
                                />
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="message__ConversationDiv">
                        <div className="message__UserHeader">
                            <div className="message__User">
                                <Avatar />
                                <div className="message__UserDetails">
                                    <h6>{opposite_user.first_name + ' ' + opposite_user.last_name}</h6>
                                    <p>{opposite_user.status?"Online":"Offline"}<div style={opposite_user.status?{backgroundColor: "#58db83"}:{backgroundColor: "red"}} ></div></p>
                                </div>
                            </div>
                            <div className="message__Options">
                                <IconButton onClick={()=>setProfilePopup(!profilePopup)} ><MoreVertRounded/></IconButton>
                                <ul style={profilePopup?{display: "block"}:{display: "none"}} >
                                    <li><PersonRounded/><p>Visit profile</p></li>
                                    <li><BlockRounded/><p>Block</p></li>
                                    <li><ReportProblemRounded/><p>Report</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="message__Conversation">
                            {
                                messagesOfRoom.map((val, key)=> {
                                    return <MessageElement key={key} text={val.text} time={moment(val.created_at).calendar()} isMyMessage={val.user.username===username} />
                                })
                            }
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="message__SendMessage">
                            <form onSubmit={handleSubmit} >
                                <div className="messages__SendMessageInputDiv">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={e=>setMessage(e.target.value)}
                                        placeholder="Enter message..."
                                    />
                                </div>
                                <Button type="submit" >Send <SendRounded/></Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    {/* <div className="message__RightProfileDiv">
                        <img
                            src={image}
                            alt="profile"
                        />
                        <h6>Sahil Gupta</h6>
                        <p>Pune, Maharashta</p>
                        <div className="message__SkillTag" >
                            <span>Actor</span>
                            <span>Singer</span>
                            <span>Director</span>
                        </div>
                        <div className="message__ProfileSpecifications">
                            <div className="message__Performance">
                                <div>
                                    <p>219</p>
                                    <span>Applied</span>
                                </div>
                                <div>
                                    <p>89</p>
                                    <span>Replied</span>
                                </div>
                                <div>
                                    <p>110</p>
                                    <span>Reviewed</span>
                                </div>
                            </div>
                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="read-only"
                                        value={3}
                                        readOnly
                                        size="small"
                                    />
                                </Box>
                            </div>
                            <div className="message__RankOfUser">
                                <EmojiEventsRounded fontSize="large" /><p>236</p>
                            </div>
                            <div className="message__ViewProfileButton">
                                <Button>View Profile</Button>
                            </div>
                            <div className="message__SocialMediaLinks" >
                                <div><Instagram /></div>
                                <div><Facebook /></div>
                                <div><YouTube /></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    username: state.Login.username,
    opposite_user: state.Messages.opposite_user,
    chat_rooms: state.Messages.chat_rooms,
    messages: state.Messages.messages,
})

export default connect(mapStateToProps, { fetch_messages, send_message, clear_chat_room_id, set_seen_messages })(MessagesRoom)