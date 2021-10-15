import React, { useEffect } from 'react'
import Campaign from '../../components/dashboard/Campaign'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import { ImportExportRounded } from '@material-ui/icons'
import { fetch_my_listings, dashboard_analytics, time_spend_analytics, fetch_my_recent_listings } from '../../store/actions'
import { connect } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router'
import { Alert } from '@material-ui/lab'

const Dashboard = ({ fetch_my_listings, my_listings_from_state, dashboard_analytics, time_spend_analytics, time_spend_data, time_spend_labels, recent_listings, fetch_my_recent_listings }) => {

    useEffect(()=>{
        fetch_my_listings()
        dashboard_analytics()
        time_spend_analytics()
        fetch_my_recent_listings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const history = useHistory()

    return (
        <div className="dashboard__Wrapper pt-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12">
                    {time_spend_labels.length > 0 && <AreaApexGraph labels={time_spend_labels} data={time_spend_data} title="Time Spent By The User" />}
                    {time_spend_labels.length === 0 && <Alert icon={false} className="justify-content-center">Create Listings To Get Started With Analytics</Alert>}
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                    {my_listings_from_state.map((val, key)=>{
                        if(val.completed === true || val.deleted === true) return null;
                        return <Campaign
                            key={key}
                            id={val.id}
                            title={val.title}
                            requirements={val.requirements}
                            views={val.views.length}
                            bids={val.applications.length}
                            price={val.payment}
                            type={val.type}
                            completed={val.completed}
                            deleted={val.deleted}
                            time={moment(val.created_at).fromNow()}
                        />
                    })}
                    {my_listings_from_state.length === 0 && <Alert icon={false} className="justify-content-center">No Listings Live, Start New Listings</Alert>}
                </div>
                <div className="col-12 mt-3">
                    <Alert severity="info">Create New Projects To Get Extra Points</Alert>
                </div>
                <div className="col-md-4 col-12 mt-2">
                    <h5>Recent Projects</h5>
                    {recent_listings.map((val, key)=>{
                        if(key> 2) return null;
                        return <Campaign
                            key={key}
                            id={val.id}
                            title={val.title}
                            requirements={val.requirements}
                            views={val.views.length}
                            bids={val.applications.length}
                            price={val.payment}
                            type={val.type}
                            completed={val.completed}
                            deleted={val.deleted}
                            time={moment(val.created_at).fromNow()}
                        />
                    })}
                </div>
                <div className="col-md-8 col-12 mt-3">
                    <div className="dashboard__Table">
                        {my_listings_from_state.length > 0 && (<table>
                            <thead>
                                <tr>
                                    <th>Title&nbsp;<ImportExportRounded /></th>
                                    <th>Price&nbsp;<ImportExportRounded /></th>
                                    <th>Applications</th>
                                    <th>Created At&nbsp;<ImportExportRounded /></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                my_listings_from_state.map((val,key)=>{
                                    return <tr key={key} onClick={()=>history.push(`/project/${val.id}`)}>
                                                <td className="projectDashboard__AvatarColumn" ><p>{val.title}</p> <span className={!val.completed && !val.deleted?"projectDashboard__UserOnline":"projectDashboard__UserOffline"}></span></td>
                                                <td>${val.payment.toLocaleString('en-US')}</td>
                                                <td>{val.applications.length}</td>
                                                <td>{moment(val.created_at).fromNow()}</td>
                                            </tr>
                                })
                            }
                                

                            </tbody>
                        </table>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    my_listings_from_state: state.Dashboard.my_listings,
    dates: state.Dashboard.dates,
    projects: state.Dashboard.projects,
    recent_listings: state.Dashboard.recent_listings,
    time_spend_labels: state.Stats.time_spend_labels,
    time_spend_data: state.Stats.time_spend_data,
})

export default connect(mapStateToProps, { fetch_my_listings, dashboard_analytics, time_spend_analytics, fetch_my_recent_listings })(Dashboard)