import React from 'react'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
// import Paper from '../../components/commons/paper/Paper'
// import BarGraph from '../../components/graphs/BarGraph'
// import LineGraph from '../../components/graphs/LineGraph'
import RankProfile from './RankProfile'
import { ImportExportRounded, StarsRounded } from '@material-ui/icons'

const Stats = () => {
    return (
        <div className="stats__Wrapper" >
            <div className="row" >
                <div className="col-lg-9 col-md-8 col-12">
                    <AreaApexGraph />
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
                                    <th>Title&nbsp;<ImportExportRounded /></th>
                                    <th>Requirement&nbsp;<ImportExportRounded /></th>
                                    <th>Price&nbsp;<ImportExportRounded /></th>
                                    <th className="projectDashboard__Badges">Status</th>
                                    <th>Applications</th>
                                    <th>Created At&nbsp;<ImportExportRounded /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><p>Singers For A Ad Film</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>Actor, Singer, Director</td>
                                    <td>$3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td>49</td>
                                    <td>2 days ago</td>
                                </tr>

                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><p>Singers For A Ad Film</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>Actor, Singer, Director</td>
                                    <td>$3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td>49</td>
                                    <td>2 days ago</td>
                                </tr>

                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><p>Singers For A Ad Film</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>Actor, Singer, Director</td>
                                    <td>$3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td>49</td>
                                    <td>2 days ago</td>
                                </tr>

                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><p>Singers For A Ad Film</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>Actor, Singer, Director</td>
                                    <td>$3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td>49</td>
                                    <td>2 days ago</td>
                                </tr>

                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><p>Singers For A Ad Film</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>Actor, Singer, Director</td>
                                    <td>$3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td>49</td>
                                    <td>2 days ago</td>
                                </tr>

                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><p>Singers For A Ad Film</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>Actor, Singer, Director</td>
                                    <td>$3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td>49</td>
                                    <td>2 days ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
