import { Button } from '@material-ui/core'
import { Facebook, Instagram, Pinterest, Send, StarsRounded, YouTube  } from '@material-ui/icons'
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
                                <img src={user} alt="profile" />
                                <div className="profile__NameAndCity">
                                    <h4>Rutuj Bokade</h4>
                                    <p>Pune, Maharashtra</p>
                                </div>
                            </div>
                            <Button> <Send fontSize="small" /> Message</Button>
                        </div>
                    </section>
                    <div className="profile__SiteStatus">
                        <div className="profile__Applications">
                            <div>
                                <h6>152</h6>
                                <p>Applications</p>
                            </div>
                            <span>|</span>
                            <div>
                                <h6>112</h6>
                                <p>Selctions</p>
                            </div>
                            <span>|</span>
                            <div>
                                <h6>2</h6>
                                <p>Under Process</p>
                            </div>
                            <span>|</span>
                            <div>
                                <h6>122</h6>
                                <p>Hours Spent</p>
                            </div>
                            <span>|</span>
                            <div>
                                <StarsRounded />
                                <p>Performance</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile__Descritpion my-3">
                        <Paper>
                            <div className="p-3">
                                <h5>About Me</h5>
                                <p>A checkbox can either be a primary action or a secondary action.
                                    The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.
                                    Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning. (⚠️ no IE 11 support)
                                    The inset prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.</p>
                            </div>
                        </Paper>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <Paper>
                        <div className="profile__SocialHandles">
                            <h5>Connect</h5>
                            <ul>
                                <li><NavLink to="/profile" ><Instagram fontSize="large" /> @rutuj_bokade</NavLink></li>
                                <li><NavLink to="/profile" ><Facebook fontSize="large" /> @rutuj_bokade</NavLink></li>
                                <li><NavLink to="/profile" ><YouTube fontSize="large" /> @rutuj_bokade</NavLink></li>
                                <li><NavLink to="/profile" ><Pinterest fontSize="large" /> @rutuj_bokade</NavLink></li>
                            </ul>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="profile__Skills">
                            <Paper>
                                <h5>Skills</h5>
                                <ul>
                                    <li>Actor</li>
                                    <li>Singer</li>
                                    <li>Director</li>
                                </ul>
                            </Paper>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="profile__Ratings">
                            <Paper>
                                <h5>Score Board</h5>
                                <div>
                                    <Rating readOnly value={3} />
                                    ( 1001 )
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