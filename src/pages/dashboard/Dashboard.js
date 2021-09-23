import React, { useEffect } from 'react'
import Campaign from '../../components/dashboard/Campaign'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import { ImportExportRounded, StarsRounded } from '@material-ui/icons'
import { fetch_my_listings, dashboard_analytics, time_spend_analytics } from '../../store/actions'
import { connect } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router'

const Dashboard = ({ fetch_my_listings, my_listings, dashboard_analytics, dates, projects, time_spend_analytics, time_spend_data, time_spend_labels }) => {

    useEffect(()=>{
        fetch_my_listings()
        dashboard_analytics()
        time_spend_analytics()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const history = useHistory()

    return (
        <div className="dashboard__Wrapper pt-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12">
                    <AreaApexGraph labels={time_spend_labels} data={time_spend_data} />
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                    {my_listings.map((val, key)=>{
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
                <div className="col-12">
                    <div className="dashboard__Table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title&nbsp;<ImportExportRounded /></th>
                                    <th>Requirement&nbsp;<ImportExportRounded /></th>
                                    <th>Price&nbsp;<ImportExportRounded /></th>
                                    <th className="projectDashboard__Badges">Status</th>
                                    <th>Applications</th>
                                    <th>Created At&nbsp;<ImportExportRounded /></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                my_listings.map((val,key)=>{
                                    return <tr key={key} onClick={()=>history.push(`/project/${val.id}`)}>
                                                <td className="projectDashboard__AvatarColumn" ><p>{val.title}</p> <span className={!val.completed && !val.deleted?"projectDashboard__UserOnline":"projectDashboard__UserOffline"}></span></td>
                                                <td>{val.requirements.map((val,key)=>{
                                                        if(key===2){
                                                            return `${val.name} `
                                                        }
                                                        else if(key<=2) {
                                                            return `${val.name}, `
                                                        } else {
                                                            return null
                                                        }
                                                    })}</td>
                                                <td>${val.payment.toLocaleString('en-US')}</td>
                                                <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                                <td>49</td>
                                                <td>{moment(val.created_at).fromNow()}</td>
                                            </tr>
                                })
                            }
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    my_listings: state.Dashboard.my_listings,
    dates: state.Dashboard.dates,
    projects: state.Dashboard.projects,
    time_spend_labels: state.Stats.time_spend_labels,
    time_spend_data: state.Stats.time_spend_data,
})

export default connect(mapStateToProps, { fetch_my_listings, dashboard_analytics, time_spend_analytics })(Dashboard)