import React, { useEffect } from 'react'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import { fetch_applications } from '../../store/actions'
import RankProfile from './RankProfile'
import { ImportExportRounded, FlashOnRounded } from '@material-ui/icons'
import { connect } from 'react-redux'
import moment from 'moment'
import { update_application, stats_analytics, time_spend_analytics } from '../../store/actions'
import { Tooltip } from '@material-ui/core'

const Stats = ({ applications, fetch_applications, username, stats_analytics, dates_analytics, applications_analytics, time_spend_analytics, time_spend_data, time_spend_labels }) => {

    useEffect(()=>{
        fetch_applications()
        stats_analytics()
        time_spend_analytics()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isSelectedOrRejected = list => {
        var res;
        list.filter(val=>{
            if(val.applicant.username === username){
                res = val
            }
            return list
        })
        return res
    }

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
                <div className="col-lg-9 col-md-8 col-12">
                    <AreaApexGraph data={applications_analytics} labels={dates_analytics} />
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <h6 className="mb-3">Top Rankers</h6>
                    <RankProfile name="Sahil Gupta" tags="Actor, Singer" rank="1" />
                    <RankProfile name="Ram Kaushik" tags="Writer, Director" rank="2" />
                    <RankProfile name="Priya Kamaji" tags="Singer, Lyricist" rank="3" />
                    <RankProfile name="Rutuj Bokade" tags="Pata nahi" rank="4" />
                    <RankProfile name="Salman Khan" tags="Best driver" rank="5" />
                </div>
                <div className="col-12">
                    <div className="stats__TotalCollaborations">
                        <table>
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
                                        const application_instance = isSelectedOrRejected(val.applications)
                                        return  <tr key={key} >
                                                    <td className="projectDashboard__AvatarColumn" ><p>{val.title}</p> <span className={!val.completed && !val.deleted?"projectDashboard__UserOnline":"projectDashboard__UserOffline"}></span></td>
                                                    <td>{val.user.first_name + ' ' + val.user.last_name}</td>
                                                    <td>${val.payment?.toLocaleString('en-US')}</td>
                                                    <td>
                                                        <div className={`projectDashboard__${application_instance.status}`}>
                                                            <Tooltip title={TooltipForRow(application_instance.status)}><FlashOnRounded /></Tooltip>
                                                        </div>
                                                    </td>
                                                    <td>{val.applications.length}</td>
                                                    <td>{moment(val.applications.created_at).fromNow()}</td>
                                                </tr>
                                    })
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-12">
                    <AreaApexGraph data={time_spend_data} labels={time_spend_labels} />
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
})

export default connect(mapStateToProps, { fetch_applications, update_application, stats_analytics, time_spend_analytics })(Stats)