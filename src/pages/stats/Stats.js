import React, { useEffect } from 'react'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import { fetch_applications } from '../../store/actions'
import RankProfile from './RankProfile'
import { ImportExportRounded, FlashOnRounded } from '@material-ui/icons'
import { connect } from 'react-redux'
import moment from 'moment'
import { update_application, stats_analytics, time_spend_analytics, top_performers } from '../../store/actions'
import { Tooltip } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const Stats = ({ applications, fetch_applications, username, stats_analytics, dates_analytics, applications_analytics, time_spend_analytics, time_spend_data, time_spend_labels, top_performers, top_performers_from_state }) => {

    useEffect(()=>{
        fetch_applications()
        stats_analytics()
        time_spend_analytics()
        top_performers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const TooltipForRow = status => {
        if(status === 'rejected'){
            return "Rejected"
        } else if(status === 'underprocess'){
            return "Under Review"
        } else if(status === 'hired'){
            return "Hired"
        } else if(status === 'notviewed'){
            return "Not Viewed"
        }
    }

    return (
        <div className="stats__Wrapper" >
            <div className="row" >
                <div className="col-lg-9 col-md-8 col-12 mt-4">
                    {applications_analytics.length > 0 && <AreaApexGraph data={applications_analytics} labels={dates_analytics} title="User Applications Over The Time" />}
                    {applications_analytics.length === 0 && <Alert icon={false} className="justify-content-center mt-4">Apply For Various Listings to enhance performance and to get started with Analytics</Alert>}
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <h6 className="mb-3">Top Rankers</h6>
                    {top_performers_from_state.map((val, key)=>(
                        <RankProfile
                                    key={key}
                                    name={val.first_name + ' ' + val.last_name}
                                    tags={val.skills.map((skill,i)=>{
                                            if(i===2){
                                                return `${skill.name} `
                                            }
                                            else if(i<=2) {
                                                return `${skill.name}, `
                                            } else {
                                                return null
                                            }
                                        })}
                                    rank={key+1}
                                    username={val.username}
                                />
                    ))}
                </div>
                <div className="col-12">
                    <div className="stats__TotalCollaborations">
                        {applications.length > 0 && <table>
                            <thead>
                                <tr>
                                    <th>Organisation&nbsp;<ImportExportRounded /></th>
                                    <th>Requirement&nbsp;<ImportExportRounded /></th>
                                    <th>Price&nbsp;<ImportExportRounded /></th>
                                    <th>Status</th>
                                    <th>Applications</th>
                                    <th>Applied At&nbsp;<ImportExportRounded /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applications.map((val, key)=>{
                                        return  <tr key={key} >
                                                    <td className="projectDashboard__AvatarColumn" ><p>{val.title}</p> <span className={!val.completed && !val.deleted?"projectDashboard__UserOnline":"projectDashboard__UserOffline"}></span></td>
                                                    <td style={{textTransform: "capitalize"}}>{val.requirements.map((val,key)=>{
                                                            if(key===2){
                                                                return `${val.name} `
                                                            }
                                                            else if(key<=2) {
                                                                return `${val.name}, `
                                                            } else {
                                                                return null
                                                            }
                                                        })}</td>
                                                    <td>${val.payment?.toLocaleString('en-US')}</td>
                                                    <td>
                                                        <div className={`projectDashboard__${val.status}`}>
                                                            <Tooltip title={TooltipForRow(val.status)}><FlashOnRounded /></Tooltip>
                                                        </div>
                                                    </td>
                                                    <td>{val.applications}</td>
                                                    <td>{moment(val.applied_on).fromNow()}</td>
                                                </tr>
                                    })
                                }
                                
                                
                            </tbody>
                        </table>}
                        {applications.length === 0 && <Alert icon={false} className="justify-content-center">No Applications To Display</Alert>}
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-12">
                    {/* <AreaApexGraph data={time_spend_data} labels={time_spend_labels} /> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    applications: state.Stats.applications,
    username: state.Login.username,
    error: state.Stats.error,
    success: state.Stats.success,
    dates_analytics: state.Stats.dates_analytics,
    applications_analytics: state.Stats.applications_analytics,
    time_spend_labels: state.Stats.time_spend_labels,
    time_spend_data: state.Stats.time_spend_data,
    top_performers_from_state: state.Stats.top_performers,
})

export default connect(mapStateToProps, { fetch_applications, update_application, stats_analytics, time_spend_analytics, top_performers })(Stats)