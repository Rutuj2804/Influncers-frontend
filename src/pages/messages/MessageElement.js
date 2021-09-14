import { Avatar } from '@material-ui/core'
import React from 'react'

const MessageElement = ({ isMyMessage, text }) => {
    return (
        <div className="messageElement__Wrapper" style={isMyMessage?{justifyContent: "flex-end"}:{}} >
            {/* {!isMyMessage?<Avatar />:null} */}
            <div className="messageElement__Message" style={isMyMessage?{backgroundColor: "#2d53da", color: "#fff!important"}:{}} >
                <p style={isMyMessage?{color: "#fff"}:{}} >{text}</p>
                <span style={isMyMessage?{color: "#fff"}:{}} >11:14 am</span>
            </div>
            {/* {isMyMessage?<Avatar />:null} */}
        </div>
    )
}

export default MessageElement
