import { Avatar } from '@material-ui/core'
import React from 'react'

const Notification = () => {
    return (
        <div className="notification__Wrapper">
            <div className="notification__Left" >
                <Avatar />
                <div className="notification__UserDetail" >
                    <p>Rutuj Bokade</p>
                    <span>Wants to collaborate a project!!!</span>
                </div>
            </div>
            <div className="notification__Right">
                <p>15mins ago</p>
            </div>
        </div>
    )
}

export default Notification