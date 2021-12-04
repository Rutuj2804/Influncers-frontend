import { Button } from '@material-ui/core'
import { Facebook, Instagram, Send, StarsRounded, YouTube  } from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Paper from '../../components/commons/paper/Paper'
import image from '../../assets/images/image.jpg'
import user from '../../assets/images/user.png'
import { connect } from 'react-redux'

const Profile = ({ user_from_state }) => {
    return (
        <div className="profile__Wrapper">
            <div className="row">
                <div className="col-lg-9 col-md-8 col-12">
                    <section className="profile__HeaderPart">
                        <div className="profile__ImageBackground">
                            <img src={image} alt="background" />
                        </div>
                        <div className="profile__ProfileDetails">
                            <div className="profile__ProfileImage">
                                <img src={user_from_state.photo ? process.env.REACT_APP_API_URL + user_from_state.photo : user} alt="profile" />
                                <div className="profile__NameAndCity">
                                    <h4>{user_from_state.first_name + ' ' + user_from_state.last_name}</h4>
                                    <p>{user_from_state.city}, {user_from_state.state}</p>
                                </div>
                            </div>
                            <Button> <Send fontSize="small" /> Message</Button>
                        </div>
                    </section>
                    <div className="profile__SiteStatus">
                        {
                            !user_from_state.isCompany ?
                            <div className="profile__Applications">
                                <div>
                                    <h6>{user_from_state.applications}</h6>
                                    <p>Applications</p>
                                </div>
                                <span>|</span>
                                <div>
                                    <h6>{user_from_state.hires}</h6>
                                    <p>Selections</p>
                                </div>
                                <span>|</span>
                                <div>
                                    <h6>{user_from_state.underprocess}</h6>
                                    <p>Under Process</p>
                                </div>
                                <span>|</span>
                                <div>
                                    <h6>{Math.floor(user_from_state.timespent)}</h6>
                                    <p>Hours Spent</p>
                                </div>
                                <span>|</span>
                                <div className={`projectDashboard__Badge${user_from_state.badge}`}>
                                    <StarsRounded />
                                    <p>Performance</p>
                                </div>
                            </div>: null
                        }
                    </div>
                    <div className="profile__Descritpion my-3">
                        <Paper>
                            <div className="p-3">
                                <h5>About Me</h5>
                                <p>{user_from_state.description}</p>
                            </div>
                        </Paper>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <Paper>
                        <div className="profile__SocialHandles">
                            <h5>Connect</h5>
                            <ul>
                                <li><NavLink to="/profile" ><Instagram fontSize="large" /> @{user_from_state.instagram}</NavLink></li>
                                <li><NavLink to="/profile" ><Facebook fontSize="large" /> @{user_from_state.facebook}</NavLink></li>
                                <li><NavLink to="/profile" ><YouTube fontSize="large" /> @{user_from_state.youtube}</NavLink></li>
                            </ul>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="profile__Skills">
                            <Paper>
                                <h5>Skills</h5>
                                <ul>
                                    {user_from_state.skills.map(val=>(
                                        <li key={val.id}>{val.name}</li>
                                    ))}
                                </ul>
                            </Paper>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="profile__Ratings">
                            <Paper>
                                <h5>Score Board</h5>
                                <div>
                                    <Rating readOnly value={user_from_state.rating} />
                                    ( {user_from_state.raters_count.length} )
                                </div>
                            </Paper>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user_from_state: state.Login
})

export default connect(mapStateToProps)(Profile)