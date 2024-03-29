import { IconButton } from '@material-ui/core'
import { CloseRounded, DashboardRounded, EqualizerRounded, HomeRounded, ModeCommentRounded, PeopleRounded, SettingsRounded } from '@material-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../../assets/images/logo.png'

const Sidebar = ({ toggle, setToggle, isCompany }) => {

    return (
        <div className={!toggle?"sidebar__Wrapper sidebar__NavbarToggle":"sidebar__Wrapper"}>
            <div className="sidebar__Logo">
                <img src={logo} alt="logo" height={35}/>
                <h4>InfloByte</h4>
            </div>
            <div className="sidebar__Menu">
                <ul>
                    <NavLink to="/home" activeClassName="sidebar__NavigationActive"><li><HomeRounded fontSize="small" /> <p>Home</p></li></NavLink>
                    { isCompany &&<NavLink to="/dashboard" activeClassName="sidebar__NavigationActive"><li><DashboardRounded fontSize="small" /> <p>Dashboard</p></li></NavLink>}
                    <NavLink to="/stats" activeClassName="sidebar__NavigationActive"><li><EqualizerRounded fontSize="small" /> <p>Statistics</p></li></NavLink>
                    <NavLink to="/messages" activeClassName="sidebar__NavigationActive"><li><ModeCommentRounded fontSize="small" /> <p>Messages</p></li></NavLink>
                    <NavLink to="/find" activeClassName="sidebar__NavigationActive"><li><PeopleRounded fontSize="small" /> <p>Find People</p></li></NavLink>
                    <NavLink to="/settings" activeClassName="sidebar__NavigationActive"><li><SettingsRounded fontSize="small" /> <p>Settings</p></li></NavLink>
                </ul>
            </div>
            {/* <div className="sidebar__Footer" onClick={()=>history.push('/help')} >
                <div className="sideBar__Create">
                    <h6>Create</h6>
                </div>
            </div> */}
            <div  className="sidebar__CloseIcon" ><IconButton onClick={()=>setToggle(false)}><CloseRounded fontSize="small" /></IconButton></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isCompany: state.Login.isCompany
})

export default connect(mapStateToProps)(Sidebar)