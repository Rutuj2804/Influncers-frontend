import { Avatar, IconButton } from '@material-ui/core'
import { CloseRounded } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ProfileCard = () => {

    const history = useHistory()

    return (
        <div className="profileCard__Wrapper" onClick={()=>history.push('/c/@rutuj_bokade')} >
            <div className="profileCard__Header">
                <div className="profileCard__UserSide" >
                    <Avatar />
                    <div className="profileCard__UserDetails">
                        <h6>Sahil Gupta</h6>
                        <p>Pune, Maharashtra<div></div></p>
                    </div>
                </div>
                <IconButton size="small"><CloseRounded fontSize="small" /></IconButton>
            </div>
            <div className="profileCard__Tags">
                <p>Actor</p>
                <p>Singer</p>
                <p>Dancer</p>
            </div>
        </div>
    )
}

export default ProfileCard
