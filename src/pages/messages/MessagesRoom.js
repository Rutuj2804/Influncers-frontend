import { Avatar, Button, IconButton } from '@material-ui/core'
import { BlockRounded, EmojiEventsRounded, Facebook, Instagram, MoreVertRounded, PersonRounded, ReportProblemRounded, SendRounded, YouTube } from '@material-ui/icons'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { SocketContext } from '../../store/socket/context'
import ContactElement from './ContactElement'
import image from '../../assets/images/image.jpg'
import MessageElement from './MessageElement'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux'

const MessagesRoom = ({ match, username, chat_rooms, user }) => {

    const [ message, setMessage ] = useState('')

    const [ messagesOfRoom, setMessagesOfRoom ] = useState([
        {
            username: 'umiraj',
            message: 'Lorem ipsum dolor sit amet.',
        },
        {
            username: 'sahil',
            message: 'Lorem ipsum dolor sit amet.',
        },
        {
            username: 'umiraj',
            message: 'Lorem ipsum dolor sit amet.',
        },
        {
            username: 'sahil',
            message: 'Lorem ipsum dolor sit amet.',
        },
        {
            username: 'umiraj',
            message: 'Lorem ipsum dolor sit amet.',
        },
        {
            username: 'sahil',
            message: 'Lorem ipsum dolor sit amet.',
        },
    ])

    const id = match.params.id

    const socket = useContext(SocketContext)
    
    const [ profilePopup, setProfilePopup ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const messageElement = {
            username,
            message
        }
        socket.emit('send-message', messageElement)
        setMessagesOfRoom([...messagesOfRoom, messageElement])
        setMessage('')
    }

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    socket.on('recieve-message', data=>{
        setMessagesOfRoom([...messagesOfRoom , data])
    })

    useEffect(() => {
        scrollToBottom()
    }, [id, messagesOfRoom]);

    const returnChatNameOfOppositeUser = users => {
        var ind;
        users.map((user)=>{
            if(user.username !== username){
                ind = user
            }
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
                                    time="1:15 pm" 
                                    online={user?.status}
                                    message="Hello!! How are you"
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
                                    <h6>{user.first_name + ' ' + user.last_name}</h6>
                                    <p>Online<div style={{backgroundColor: "#58db83"}} ></div></p>
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
                                    return <MessageElement key={key} text={val.message} isMyMessage={val.username===username} />
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
                {/* <div className="col-lg-3 col-md-3 col-12">
                    <div className="message__RightProfileDiv">
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
                    </div>
                </div> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    username: state.Login.username,
    user: state.Login,
    chat_rooms: state.Messages.chat_rooms,
})

export default connect(mapStateToProps)(MessagesRoom)