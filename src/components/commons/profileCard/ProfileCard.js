import { Avatar, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ProfileCard = ({ full_name, place, username, online, skills, photo, isCompany }) => {

    const history = useHistory()

    const onClickOnRemoveElement = () => {
        const elementToRemove = document.querySelector(`#${username}`);
        elementToRemove.parentNode.removeChild(elementToRemove)
    }

    return (
        <div className={`profileCard__Wrapper`} id={`${username}`}>
            <div className="profileCard__Header">
                <div className="profileCard__UserSide" onClick={()=>history.push(`/c/@${username}`)} >
                    <Avatar src={photo} />
                    <div className="profileCard__UserDetails">
                        <h6>{full_name}{isCompany ?<p>C</p>:null}</h6>
                        <p>{place}<div className={online?"profileCard__Online":"profileCard__Offline"}></div></p>
                    </div>
                </div>
                <IconButton size="small" onClick={()=>onClickOnRemoveElement()}>
                    <Close fontSize="small" />
                </IconButton>
            </div>
            <div className="profileCard__Tags">
                {skills?.map((val,key)=>{
                            if(key===2){
                                return <p>{val.name} </p>
                            }
                            else if(key<=2) {
                                return <p>{val.name} </p>
                            } else {
                                return null
                            }
                        })}
            </div>
        </div>
    )
}

export default ProfileCard
