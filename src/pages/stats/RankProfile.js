import { Avatar } from '@material-ui/core'
import image from '../../assets/images/image.jpg'
import React from 'react'

const RankProfile = ({ name, tags, rank }) => {
    return (
        <>
        <div className="rankProfile__Wrapper" >
            <div className="rankProfile__Upper">
                <div className="rankProfile__Left">
                    <div className="rankProfile__User">
                        <Avatar src={image} />
                        <div className="rankProfile__UserDetails">
                            <h6>{name}</h6>
                            <p>{tags}</p>
                        </div>
                    </div>
                </div>
                <div className="rankProfile__Right">
                    {rank}
                </div>
            </div>
            <div className="rankProfile__Background">{rank}</div>
        </div>
        </>
    )
}

export default RankProfile
