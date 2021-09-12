import { Box, IconButton } from '@material-ui/core'
import { Facebook, Instagram, YouTube } from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import Paper from '../../components/commons/paper/Paper'
import image from '../../assets/images/image.jpg'
import { connect } from 'react-redux'

const Profile = ({ user_from_state }) => {
    return (
        <div className="profile__Wrapper">
            <div className="profile__Header">
                <div className="profile__HeaderLeft">
                    <div className="profile__Image">
                        <img 
                            src={image}
                            alt="profile"
                        />
                    </div>
                </div>
                <div className="profile__HeaderRight">
                    <div className="profile__UserBasicDetails">
                        <div className="profile__User">
                            <h5>{user_from_state.first_name + ' ' + user_from_state.last_name}</h5>
                            <p>{user_from_state.city + ', ' + user_from_state.state}</p>
                        </div>
                        <div className="profile__Ratings">
                            <p>{user_from_state.rating}</p>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                    name="read-only"
                                    value={user_from_state.rating}
                                    readOnly
                                    size="small"
                                />
                            </Box>
                            <div>({user_from_state.raters_count})</div>
                        </div>
                        <div className="profile__SocialMediaHandles">
                            <div>
                                <a target="_blank" rel="noreferrer" href={user_from_state.instagram} ><IconButton><Instagram /></IconButton></a>
                            </div>
                            <div>
                                <a target="_blank" rel="noreferrer" href={user_from_state.facebook} ><IconButton><Facebook /></IconButton></a>
                            </div>
                            <div>
                                <a target="_blank" rel="noreferrer" href={user_from_state.youtube} ><IconButton><YouTube /></IconButton></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__Middle my-4">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="profile__Skills">
                            <Paper>
                                <h6>Skills</h6>
                                <div className="profile__SkillsTag">
                                    {user_from_state.skills.map((val, idx) => {
                                        return <p key={idx} >{val.name}</p>
                                    })}
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user_from_state: state.Login
})

export default connect(mapStateToProps)(Profile)