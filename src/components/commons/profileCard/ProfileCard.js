import { Avatar } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ProfileCard = ({ full_name, place, username, online, skills, photo }) => {

    const history = useHistory()

    return (
        <div className="profileCard__Wrapper" onClick={()=>history.push(`/c/@${username}`)} >
            <div className="profileCard__Header">
                <div className="profileCard__UserSide" >
                    <Avatar src={photo} />
                    <div className="profileCard__UserDetails">
                        <h6>{full_name}</h6>
                        <p>{place}<div className={online?"":"profileCard__Offline"}></div></p>
                    </div>
                </div>
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
