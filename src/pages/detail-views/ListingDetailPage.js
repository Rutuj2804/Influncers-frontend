import { Button, IconButton } from '@material-ui/core'
import { BookmarkRounded, CheckRounded, LocationOnRounded, ShareRounded, SubjectRounded, TrackChangesRounded, VideocamRounded, WorkRounded } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import image from '../../assets/images/image.jpg'
import { fetch_detail_view_of_listing } from '../../store/actions'
import Paper from '../../components/commons/paper/Paper'
import { connect } from 'react-redux'

const ListingDetailPage = ({ fetch_detail_view_of_listing, match, single_listing, loading }) => {

    const [ formData, setFormData ] = useState({
        photo: image,
        first_name: '',
        last_name: '',
        title: '',
        city: '',
        state: '',
        payment: '',
        type: '',
        place: '',
        target: '',
        positions: '',
        description: '',
        work_description: [],
        reward: [],
        requirements: [],
    })

    const { id } = match.params

    useEffect(()=>{
        fetch_detail_view_of_listing(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(()=>{
        setFormData({
            photo: single_listing.user?.photo?single_listing.user.photo:image,
            first_name: single_listing.user.first_name,
            last_name: single_listing.user.last_name,
            title: single_listing.title,
            city: single_listing.user.city,
            state: single_listing.user.state,
            payment: single_listing.payment,
            type: single_listing.type,
            place: single_listing.place,
            target: single_listing.target,
            positions: single_listing.positions,
            description: single_listing.description,
            work_description: single_listing.work_description,
            reward: single_listing.reward,
            requirements: single_listing.requirements,
        })
    }, [single_listing])

    return (
    !loading ?
        <div className="listingDetailPage__Wrapper">
            <div className="listingDetailPage__Header">
                <div className="listingDetailPage__HeaderLeft">
                    <img 
                        src={formData.photo}
                        alt="profile"
                    />
                    <div className="listingDetailPage__Company">
                        <h4>{formData.first_name + ' ' + formData.last_name}</h4>
                        <h6>{formData.title}</h6>
                        <p>{formData.city + ', ' + formData.state}</p>
                    </div>
                </div>
                <div className="listingDetailPage__HeaderRight">
                    <div>
                        <IconButton>
                            <BookmarkRounded/>
                        </IconButton>
                        <IconButton>
                            <ShareRounded/>
                        </IconButton>
                    </div>
                    <div className="listingDetailPage__Rate">
                        <span>${formData.payment}&nbsp;</span><p>/video</p>
                    </div>
                </div>
            </div>
            <div className="listingDetailPage__MiddlePart">
                <div className="listingDetailPage__Tags">
                    {formData.requirements.map((val, key)=>{
                        return <p key={key}>{val.name}</p>
                    })}
                </div>
                <div className="listingDetailPage__Conditions">
                    <div className="listingDetailPage__SkillsIcon">
                        <SubjectRounded/>
                    </div>
                    <div className="listingDetailPage__SkillBlock" >
                        <div className="listingDetailPage__Dividation" >
                            <WorkRounded fontSize="large" />
                            <p>{formData.type}</p>
                        </div>
                    </div>
                    <div className="listingDetailPage__SkillBlock" >
                        <div className="listingDetailPage__Dividation" >
                            <LocationOnRounded fontSize="large" />
                            <p>{formData.place}</p>
                        </div>
                    </div>
                    <div className="listingDetailPage__SkillBlock" >
                        <div className="listingDetailPage__Dividation" >
                            <TrackChangesRounded fontSize="large" />
                            <p>{formData.target.toLocaleString('en-US')}</p>
                        </div>
                    </div>
                    <div className="listingDetailPage__SkillBlock" >
                        <div className="listingDetailPage__Dividation" >
                            <VideocamRounded fontSize="large" />
                            <p>{formData.positions}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listingDetailPage__Footer">
                <div className="listingDetailPage__Overview">
                    <Paper>
                        <h4>Overview</h4>
                        <p>{formData.description}</p>
                    </Paper>
                </div>
                <div className="listingDetailPage__Description">
                    <Paper>
                        <h4>Work description</h4>
                        <ul>
                            {
                                formData.work_description.map((val, key)=>{
                                    return <li key={key} >
                                                <CheckRounded/>
                                                <p>{val.text}</p>
                                            </li>
                                })
                            }
                            
                        </ul>
                    </Paper>
                </div>
                <div className="listingDetailPage__Rewards">
                        <h4>Rewards</h4><br/>
                        <div>
                            {formData.reward.map((val, key)=>{
                                return <p key={key}>{val.text}</p>
                            })}
                        </div>
                </div>
                <div className="listingDetailPage__Apply">
                    <Button>Apply</Button>
                </div>
            </div>
        </div>: null
    )
}

const mapStateToProps = state =>({
    single_listing: state.Home.single_listing,
    loading: state.Loading.loading
})

export default connect(mapStateToProps, { fetch_detail_view_of_listing })(ListingDetailPage)