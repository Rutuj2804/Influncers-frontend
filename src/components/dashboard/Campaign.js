import { GroupRounded, VisibilityRounded } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Campaign = ({ title, requirements, views, bids, price, type, time, id, completed, deleted }) => {

    const history = useHistory()

    return (
        <div className="campaign__Wrapper" onClick={()=>history.push(`/project/${id}`)} >
            <div className="campaign__Left">
                <div className="campaign__ListingDetails" >
                    <h6>{title}<div className={completed || deleted?"campaign__Offline":"campaign__Online"}></div></h6>
                    <p>{requirements.map((val,key)=>{
                            if(key===2){
                                return `${val.name} `
                            }
                            else if(key<=2) {
                                return `${val.name}, `
                            } else {
                                return null
                            }
                        })}</p>
                </div>
                <div className="campaign__RealtimeDetails">
                    <div className="campaign__Visibility" >
                        <VisibilityRounded fontSize="small"/>
                        <p>{views} Views</p>
                    </div>
                    <div className="campaign__Bids" >
                        <GroupRounded fontSize="small"/>
                        <p>{bids} Bids</p>
                    </div>
                </div>
            </div>
            <div className="campaign__Right">
                <div className="campaign__Money">
                    <span>${price}</span><p>/&nbsp;{type}</p>
                </div>
                <div className="campaign__Time">
                    <p>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default Campaign
