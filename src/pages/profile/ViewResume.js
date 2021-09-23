import React from 'react'
import image from '../../assets/images/image.jpg'
import { Brightness1Rounded, EditRounded, StarsRounded, VerifiedUser, VisibilityRounded } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import { IconButton, Tooltip, Typography } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import { useHistory } from 'react-router-dom'
 
const ViewResume = () => {

    const history = useHistory()

    return (
        <div className="viewResume__Wrapper">
            <div className="viewResume__Header">
                <div className="viewResume__HeaderLeft">
                    <img src={image} alt="profile" />
                    <div className="viewResume__ShortBio">
                        <h2>Rutuj Jeevan Bokade</h2>
                        <h6>Student at <span>Pune, Maharashtra</span></h6>
                        {/* <p>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
                        Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.</p> */}
                        <div className="viewResume__Grading">
                            <Tooltip title="Points">
                            <div className="viewResume__Points">
                                <Brightness1Rounded />
                                3,400
                            </div>
                            </Tooltip>
                            <Tooltip title="Rating">
                            <div className="viewResume__Points">
                                <StarsRounded />
                                <div>
                                    <Rating name="read-only" value={5} readOnly />
                                </div>
                            </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="viewResume__HeaderRight">
                    <Tooltip title="Edit">
                        <IconButton onClick={()=>history.push('/edit-resume')} ><EditRounded fontSize="small" /></IconButton>
                    </Tooltip>
                    <Tooltip title="Public view">
                        <IconButton onClick={()=>history.push('/resume/1')} ><VisibilityRounded fontSize="small" /></IconButton>
                    </Tooltip>
                </div>
            </div>
            <hr />
            <div className="viewResume__MiddleTop">
                <div className="viewResume__Description">
                    <h4>Description</h4>
                    <p>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
                    Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
                    Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
                    Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.</p>
                </div>
                <div className="viewResume__TraningAndCertification">
                    <h4>Traning And Certifications</h4>
                    <table>
                            <thead>
                                <tr>
                                    <th>Courses</th>
                                    <th>Skills</th>
                                    <th>Achievement</th>
                                    <th>Assessed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Advanced Certification of Acting</td>
                                    <td>Acting</td>
                                    <td>Gold medalist</td>
                                    <td><VerifiedUser/></td>
                                </tr>
                                <tr>
                                    <td>Advanced Certification of Acting</td>
                                    <td>Acting</td>
                                    <td>Gold medalist</td>
                                    <td><VerifiedUser/></td>
                                </tr>
                                <tr>
                                    <td>Advanced Certification of Acting</td>
                                    <td>Acting</td>
                                    <td>Gold medalist</td>
                                    <td><VerifiedUser/></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
            <div className="viewResume__MiddleBottom">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="viewResume__MiddleBottomWork">
                            <h4>Work Experience</h4>
                            <div>
                            <Timeline position="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                    9:30 am
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <FastfoodIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Eat
                                    </Typography>
                                    <Typography>Because you need strength</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                    10:00 am
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary">
                                        <LaptopMacIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Code
                                    </Typography>
                                    <Typography>Because it&apos;s awesome!</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <HotelIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Sleep
                                    </Typography>
                                    <Typography>Because you need rest</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    <TimelineDot color="secondary">
                                        <RepeatIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Repeat
                                    </Typography>
                                    <Typography>Because this is the life you love!</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                </Timeline>
                            </div>
                        </div>
                        <div className="viewResume__Education">
                            <h4>Education</h4>
                            <table>
                            <thead>
                                <tr>
                                    <th>Courses</th>
                                    <th>Skills</th>
                                    <th>Assessed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Advanced Certification of Acting</td>
                                    <td>Acting</td>
                                    <td><VerifiedUser/></td>
                                </tr>
                                <tr>
                                    <td>Advanced Certification of Acting</td>
                                    <td>Gold medalist</td>
                                    <td><VerifiedUser/></td>
                                </tr>
                                <tr>
                                    <td>Advanced Certification of Acting</td>
                                    <td>Acting</td>
                                    <td><VerifiedUser/></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="viewResume__MiddleBottomProfesional">
                            <h4>Professional Skills</h4>
                            <div className="viewResume__Starts">
                                <h6>Acting</h6>
                                <div><Rating name="read-only" value={5} readOnly /></div>
                            </div>
                            <div className="viewResume__Starts">
                                <h6>Singing</h6>
                                <div><Rating name="read-only" value={5} readOnly /></div>
                            </div>
                            <div className="viewResume__Starts">
                                <h6>Direction</h6>
                                <div><Rating name="read-only" value={5} readOnly /></div>
                            </div>
                            <div className="viewResume__Starts">
                                <h6>Acting</h6>
                                <div><Rating name="read-only" value={5} readOnly /></div>
                            </div>
                            <div className="viewResume__Starts">
                                <h6>Singing</h6>
                                <div><Rating name="read-only" value={5} readOnly /></div>
                            </div>
                            <div className="viewResume__Starts">
                                <h6>Direction</h6>
                                <div><Rating name="read-only" value={5} readOnly /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewResume
