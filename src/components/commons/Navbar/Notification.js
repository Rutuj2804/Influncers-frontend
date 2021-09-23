import { Avatar } from '@material-ui/core'
import React from 'react'

const Notification = ({ by_user, text_one, highlighted_text, text_two, time }) => {
    return (
        <div className="notification__Wrapper">
            <div className="notification__Left" >
                <Avatar />
                <div className="notification__UserDetail" >
                    <p>{by_user.first_name+' '+by_user.last_name}</p>
                    <span>{text_one}<span>{highlighted_text}</span>{text_two}</span>
                </div>
            </div>
            <div className="notification__Right">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Notification