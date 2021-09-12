import { ChevronRightRounded } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ProfileNavigation = ({ icon, text, path }) => {

    const history = useHistory();

    return (
        <div className="profileNavigation__Wrapper" onClick={()=>history.push(path)} >
            <div className="profileNavigation__Left">
                {icon}
                <p>{text}</p>
            </div>
            <div className="profileNavigation__Right">
                <ChevronRightRounded/>
            </div>
        </div>
    )
}

export default ProfileNavigation
