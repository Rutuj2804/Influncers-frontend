import { Button, IconButton } from '@material-ui/core'
import { BlockRounded, BookmarkRounded, GroupRounded, LocationOnRounded, MoreVertRounded, PersonRounded, ReportProblemRounded, SubjectRounded, TrackChangesRounded, VideocamRounded, VisibilityRounded, WorkRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import image from '../../assets/images/image.jpg'
import moment from 'moment'

const Listing = ({ id, profile_image, title, requirements, views, applications, price, price_on, type, datetime, place, target, positions }) => {

    const [ profilePopup, setProfilePopup ] = useState(false)

    const history = useHistory()

    return (
        <div className="listing__Wrapper">
            <div className="listing__Header">
                <div className="listing__HeaderLeft" onClick={()=>history.push(`/listing/${id}`)} >
                    <img 
                        src={profile_image?profile_image:image}
                        alt="logo"
                    />
                    <div className="listing__ListerDetails">
                        <h4>{title}</h4>
                        <h6>{requirements.map((val,key)=>{
                            if(key===2){
                                return `${val.name} `
                            }
                            else if(key<=2) {
                                return `${val.name}, `
                            } else {
                                return null
                            }
                        })}</h6>
                        <div className="listing__RealTimeVisibility">
                            <div className="listing__Visibility" >
                                <VisibilityRounded fontSize="small"/>
                                <p>{views} Views</p>
                            </div>
                            <div className="listing__Bids" >
                                <GroupRounded fontSize="small"/>
                                <p>{applications} Bids</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing__HeaderRight">
                    <div className="listing__Bookmark">
                        <div className="listing__BookmarkSingleElement">
                            <IconButton size="small" >
                                <BookmarkRounded />
                            </IconButton>
                        </div>
                        <div className="listing__BookmarkSingleElement">
                            <IconButton size="small"  onClick={()=>setProfilePopup(!profilePopup)} >
                                <MoreVertRounded />
                            </IconButton>
                            <ul style={profilePopup?{display: "block"}:{display: "none"}} >
                                <li><PersonRounded/><p>Visit profile</p></li>
                                <li><BlockRounded/><p>Block</p></li>
                                <li><ReportProblemRounded/><p>Report</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="listing__Money">
                        <span>${price}</span><p>/&nbsp;{price_on}</p>
                    </div>
                    <div className="listing__Time">
                        <p>{moment(datetime).fromNow()}</p>
                    </div>
                </div>
            </div>
            <div className="listing__Footer">
                <div className="listing__FooterLeft">
                    <div className="listing__Skills">
                        <div className="listing__SkillsIcon">
                            <SubjectRounded/>
                        </div>
                        <div className="listing__SkillBlock" >
                            <div className="listing__Dividation" >
                                <WorkRounded fontSize="small" />
                                <p>{type}</p>
                            </div>
                        </div>
                        <div className="listing__SkillBlock" >
                            <div className="listing__Dividation" >
                                <LocationOnRounded fontSize="small" />
                                <p>{place}</p>
                            </div>
                        </div>
                        <div className="listing__SkillBlock" >
                            <div className="listing__Dividation" >
                                <TrackChangesRounded fontSize="small" />
                                <p>{target.toLocaleString('en-US')}</p>
                            </div>
                        </div>
                        <div className="listing__SkillBlock" >
                            <div className="listing__Dividation" >
                                <VideocamRounded fontSize="small" />
                                <p>{positions}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing__FooterRight">
                    <Button onClick={()=>history.push(`/listing/${id}`)} >View Details</Button>
                </div>
            </div>
        </div>
    )
}

export default Listing
