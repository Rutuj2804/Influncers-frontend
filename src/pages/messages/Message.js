import { Avatar, Button, IconButton } from '@material-ui/core'
import { BlockRounded, EmojiEventsRounded, Facebook, Instagram, MoreVertRounded, PersonRounded, ReportProblemRounded, SendRounded, YouTube } from '@material-ui/icons'
import React, { useState } from 'react'
import ContactElement from './ContactElement'
import image from '../../assets/images/image.jpg'
import MessageElement from './MessageElement'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const Message = () => {

    const [ message, setMessage ] = useState('')
    
    const [ profilePopup, setProfilePopup ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
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
                            <ContactElement 
                                name="Sahil Gupta" 
                                status="Online" 
                                time="1:15 pm" 
                                online
                                message="Hello!! How are you"
                            />
                            <ContactElement name="Ram Kaushik" status="Online" online time="4:30 am" message="Lorem ipsum dolor sit amet, incididunt ut." />
                            <ContactElement name="Priya kamaji" status="Offline" time="yesterday" message="Lorem ipsum dolor sit amet." />
                            <ContactElement name="Priya kamaji" status="Offline" time="yesterday" message="Lorem ipsum dolor sit amet." />
                            <ContactElement name="Selmon Khan" status="Driver" online time="yesterday" message="Gadi driver chala raha tha" />
                            <ContactElement name="Selmon Khan" status="Driver" online time="yesterday" message="Gadi driver chala raha tha" />
                            <ContactElement name="Narendra Modi" status="Offline" time="1 week ago" message="Bhaiyo aur beheno" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="message__ConversationDiv">
                        <div className="message__UserHeader">
                            <div className="message__User">
                                <Avatar />
                                <div className="message__UserDetails">
                                    <h6>Sahil Gupta</h6>
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
                            <MessageElement/>
                            <MessageElement isMyMessage />
                            <MessageElement/>
                            <MessageElement isMyMessage />
                            <MessageElement/>
                            <MessageElement isMyMessage />
                            <MessageElement/>
                            <MessageElement isMyMessage />
                            <MessageElement/>
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
                </div>
            </div>
        </div>
    )
}

export default Message
