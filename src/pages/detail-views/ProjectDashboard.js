import { Avatar, Button } from '@material-ui/core'
import { ImportExportRounded, StarsRounded } from '@material-ui/icons'
import React from 'react'
import AreaApexGraph from '../../components/graphs/AreaApexGraph'
import Paper from '../../components/commons/paper/Paper'
import Doughnut from '../../components/graphs/Doughnut'
import PieChart from '../../components/graphs/PieChart'

const ProjectDashboard = ({ match }) => {

    const id = match.params.id

    return (
        <div className="projectDashboard__Wrapper">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <AreaApexGraph />
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="projectDashboard__TopButtonGrpLeft my-3">
                        <Button>View Project</Button>
                        <Button>Edit Project</Button>
                    </div>
                    <Paper>
                        <PieChart />
                    </Paper>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="projectDashboard__TopButtonGrpRight my-3">
                        <Button>Delete Project</Button>
                        <Button>Hired</Button>
                    </div>
                    <Paper>
                        <Doughnut />
                    </Paper>
                </div>
                <div className="col-12">
                    <div className="projectDashboard__Table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name&nbsp;<ImportExportRounded /></th>
                                    <th>Username&nbsp;<ImportExportRounded /></th>
                                    <th>Points&nbsp;<ImportExportRounded /></th>
                                    <th className="projectDashboard__Badges">Rating</th>
                                    <th>Message</th>
                                    <th>Recieved&nbsp;<ImportExportRounded /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>


                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge4" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge3" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge4" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge3" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge4" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge3" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge5" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge4" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOnline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge3" ><StarsRounded /></td>
                                    <td><Button>Message</Button></td>
                                    <td>2 days ago</td>
                                </tr>
                                <tr>
                                    <td className="projectDashboard__AvatarColumn" ><Avatar /> <p>Rutuj bokade</p> <span className="projectDashboard__UserOffline"></span></td>
                                    <td>@Rutuj_bokade</td>
                                    <td>3,457</td>
                                    <td className="projectDashboard__Badges projectDashboard__Badge2" ><StarsRounded /></td>
                                    <td className="projectDashboard__ButtonOffline"><Button>Message</Button></td>
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

export default ProjectDashboard
