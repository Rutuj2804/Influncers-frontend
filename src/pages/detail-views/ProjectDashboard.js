import { Avatar, Button, IconButton } from '@material-ui/core'
import { EditRounded, FlashOnRounded, StarsRounded } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import Paper from '../../components/commons/paper/Paper'
import Doughnut from '../../components/graphs/Doughnut'
import PieChart from '../../components/graphs/PieChart'
import { fetch_detail_view_of_listing, hiring_completed, remove_messages, update_application, remove_messages_from_home, listing_detail_view_analytics, create_chat_room, delete_listings } from '../../store/actions'
import { connect } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import SuccessPopup from '../../components/popups/success/SuccessPopup'
import ErrorPopup from '../../components/popups/error/ErrorPopup'
import UpdateApplication from '../../components/popups/applications/UpdateApplication'

const ProjectDashboard = ({ match, fetch_detail_view_of_listing, hiring_completed, listing_detail, success, error, remove_messages, update_application, success_from_home, error_from_home, remove_messages_from_home, listing_detail_view_analytics, dates_from_state, applications_from_state, badges_from_state, application_badges_from_state, rates_from_state, rating_labels_from_state, create_chat_room, chat_room_id_from_home, delete_listings }) => {

    const id = match.params.id

    const [ updateApplicationId, setUpdateApplicationId ] = useState(null)

    const [ defaultApplicationStatus, setDefaultApplicationStatus ] = useState('')

    const history = useHistory()

    useEffect(()=>{
        fetch_detail_view_of_listing(id)
        listing_detail_view_analytics(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]) 

    const handleEditApplication = (id, status) => {
        setUpdateApplicationId(id)
        setDefaultApplicationStatus(status)
    }

    const redirectToMessages = (username) => {
        create_chat_room(username)
    }

    if(chat_room_id_from_home){
        return <Redirect to={`/messages/${chat_room_id_from_home}`} />
    }

    return (
        <div className="projectDashboard__Wrapper">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <AreaApexGraph labels={dates_from_state} data={applications_from_state} />
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="projectDashboard__TopButtonGrpLeft my-3">
                        <Button onClick={()=>history.push(`/listing/${id}`)} >View Project</Button>
                        <Button disabled={listing_detail.completed || listing_detail.deleted}>Edit Project</Button>
                    </div>
                    <Paper>
                        <PieChart labels={badges_from_state} data={application_badges_from_state} backgroundColor={['#f5b225', '#ec536c', '#7a6fbe', '#58db83', '#29bbe3']} borderColor={['#f5b225', '#ec536c', '#7a6fbe', '#58db83', '#29bbe3']} />
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="projectDashboard__TopButtonGrpRight my-3">
                        <Button onClick={()=>delete_listings(id)} disabled={listing_detail.completed || listing_detail.deleted}>Delete Project</Button>
                        <Button onClick={()=>hiring_completed(id)} disabled={listing_detail.completed || listing_detail.deleted}>Hired</Button>
                    </div>
                    <Paper>
                        <Doughnut data={rates_from_state} labels={rating_labels_from_state} backgroundColor={['#f5b225', '#ec536c', '#7a6fbe', '#58db83', '#29bbe3']} />
                    </Paper>
                </div>
                <div className="col-12">
                    <div className="projectDashboard__Table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Points</th>
                                    <th className="projectDashboard__Badges">Rating</th>
                                    <th>Status</th>
                                    <th>Message</th>
                                    <th className="text-center">Edit Application</th>
                                    <th>Recieved</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listing_detail.applications?.map((val, key)=> {
                                        return  <tr key={key}>
                                                    <td className="projectDashboard__AvatarColumn" ><Avatar src={`${process.env.REACT_APP_API_URL}${val.applicant.photo}`} /> <p>{val.applicant.first_name + ' ' + val.applicant.last_name}</p> <span className={val.applicant.online?"projectDashboard__UserOnline":"projectDashboard__UserOffline"}></span></td>
                                                    <td>@{val.applicant.username}</td>
                                                    <td>{val.applicant.points}</td>
                                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                                    <td className={`projectDashboard__${val.status}`} ><FlashOnRounded /></td>
                                                    <td><Button onClick={()=>redirectToMessages(val.applicant.username)}>Message</Button></td>
                                                    <td className="text-center"><IconButton size="small" disabled={val.status==='hired'} onClick={()=>handleEditApplication(val.id, val.status)} ><EditRounded fontSize="small" /></IconButton></td>
                                                    <td>{moment(val.created_at).fromNow()}</td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {updateApplicationId ? <div className="successAndError__Popup">
                <UpdateApplication projectID={id} applicationID={updateApplicationId} funtionToRun={update_application} resetFuntion={setUpdateApplicationId} defaultValue={defaultApplicationStatus} />
            </div> : null}
            {success ? <div className="successAndError__Popup">
                <SuccessPopup continueFun={remove_messages} message={success} path="/dashboard" />
            </div> : null}
            {error ? <div className="successAndError__Popup">
                <ErrorPopup continueFun={remove_messages} message={error} path={`/project/${id}`}/>
            </div> : null}
            {success_from_home ? <div className="successAndError__Popup">
                <SuccessPopup continueFun={remove_messages_from_home} message={success_from_home} path={`/project/${id}`} />
            </div> : null}
            {error ? <div className="successAndError__Popup">
                <ErrorPopup continueFun={remove_messages_from_home} message={error_from_home} path={`/project/${id}`}/>
            </div> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    listing_detail: state.Home.single_listing,
    success: state.DetailView.success,
    error: state.DetailView.error,
    dates_from_state: state.DetailView.dates,
    applications_from_state: state.DetailView.applications,
    badges_from_state: state.DetailView.badges,
    application_badges_from_state: state.DetailView.application_badges,
    rates_from_state: state.DetailView.rates,
    rating_labels_from_state: state.DetailView.rating_labels,
    chat_room_id_from_home: state.Messages.chat_room_id,
    success_from_home: state.Home.success,
    error_from_home: state.Home.error,
})

export default connect(mapStateToProps, { fetch_detail_view_of_listing, hiring_completed, remove_messages, update_application, remove_messages_from_home, listing_detail_view_analytics, create_chat_room, delete_listings })(ProjectDashboard)