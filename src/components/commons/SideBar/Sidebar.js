import { ContactSupportRounded, DashboardRounded, EqualizerRounded, HomeRounded, ModeCommentRounded, PeopleRounded, SettingsRounded } from '@material-ui/icons'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Sidebar = () => {

    const history = useHistory()

    return (
        <div className="sidebar__Wrapper">
            <div className="sidebar__Logo">
                <h4>Neuro.</h4>
            </div>
            <div className="sidebar__Menu">
                <ul>
                    <NavLink to="/home" activeClassName="sidebar__NavigationActive"><li><HomeRounded fontSize="small" /> <p>Home</p></li></NavLink>
                    <NavLink to="/dashboard" activeClassName="sidebar__NavigationActive"><li><DashboardRounded fontSize="small" /> <p>Dashboard</p></li></NavLink>
                    <NavLink to="/stats" activeClassName="sidebar__NavigationActive"><li><EqualizerRounded fontSize="small" /> <p>Statistics</p></li></NavLink>
                    <NavLink to="/messages" activeClassName="sidebar__NavigationActive"><li><ModeCommentRounded fontSize="small" /> <p>Messages</p></li></NavLink>
                    <NavLink to="/find" activeClassName="sidebar__NavigationActive"><li><PeopleRounded fontSize="small" /> <p>Find People</p></li></NavLink>
                    <NavLink to="/settings" activeClassName="sidebar__NavigationActive"><li><SettingsRounded fontSize="small" /> <p>Settings</p></li></NavLink>
                </ul>
            </div>
            <div className="sidebar__Footer" onClick={()=>history.push('/help')} >
                <ContactSupportRounded/>
            </div>
        </div>
    )
}

export default Sidebar