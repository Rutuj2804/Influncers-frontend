import React from 'react'
import Campaign from '../../components/dashboard/Campaign'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import { ImportExportRounded, StarsRounded } from '@material-ui/icons'

const Dashboard = () => {
    return (
        <div className="dashboard__Wrapper pt-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12">
                    <AreaApexGraph/>
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    <Campaign/>
                    
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

export default Dashboard
