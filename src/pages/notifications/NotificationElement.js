import { Avatar } from '@material-ui/core'
import React from 'react'
import image from '../../assets/images/image.jpg'
import moment from 'moment'

const NotificationElement = ({ name, message, highlighted, message_second, time, online }) => {
    return (
        <div className="notificationElement__Wrapper" >
            <div className="notificationElement__Avatar">
                <Avatar src={image} alt="profile" />
                <div className="notificationElement__UserDetails" >
                    <h6>{name}<div style={online?{backgroundColor: "#58db83"}:{backgroundColor: "#ec536c"}} ></div></h6>
                    <p>{message}&nbsp;<span>{highlighted}</span>&nbsp;{message_second}</p>
                </div>
            </div>
            <p>{moment(time).fromNow()}</p>
        </div>
    )
}

export default NotificationElement
