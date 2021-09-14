import { Avatar } from '@material-ui/core'
import image from '../../assets/images/image.jpg'
import React from 'react'
import { useHistory } from 'react-router'

const ContactElement = ({ name, status, message, time, online, roomId }) => {

    const history = useHistory()

    return (
        <div className="contactElement__Wrapper" onClick={()=>history.push(`/messages/${roomId}`)}>
            <div className="contactElement__Header">
                <div className="contactElement__Avatar">
                    <Avatar src={image} />
                    <div className="contactElement__UserDetails">
                        <h6>{name}</h6>
                        <p>{status}<div style={online?{backgroundColor: "#58db83"}:{backgroundColor: "#ec536c"}} ></div></p>
                    </div>
                </div>
                <p>{time}</p>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default ContactElement
