import { GroupRounded, VisibilityRounded } from '@material-ui/icons'
import React from 'react'

const Campaign = () => {

    return (
        <div className="campaign__Wrapper">
            <div className="campaign__Left">
                <div className="campaign__ListingDetails" >
                    <h6>Ad film for Google Inc.<div></div></h6>
                    <p>Actor, Director, Script Writer</p>
                </div>
                <div className="campaign__RealtimeDetails">
                    <div className="campaign__Visibility" >
                        <VisibilityRounded fontSize="small"/>
                        <p>260 Views</p>
                    </div>
                    <div className="campaign__Bids" >
                        <GroupRounded fontSize="small"/>
                        <p>26 Bids</p>
                    </div>
                </div>
            </div>
            <div className="campaign__Right">
                <div className="campaign__Money">
                    <span>$126</span><p>/&nbsp;video</p>
                </div>
                <div className="campaign__Time">
                    <p>2 day ago</p>
                </div>
            </div>
        </div>
    )
}

export default Campaign
