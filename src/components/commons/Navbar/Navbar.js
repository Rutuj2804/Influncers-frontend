import { Badge, IconButton } from '@material-ui/core'
import { ChevronRightRounded, EditRounded, NotificationsRounded, AddRounded, PersonRounded, PowerSettingsNewRounded, SearchRounded, SettingsRounded, SubjectRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import Notification from './Notification'
import ProfileNavigation from './ProfileNavigation'
import image from '../../../assets/images/image.jpg'
import { useHistory } from 'react-router-dom'
import { logout_user } from '../../../store/actions'
import AddComponent from './AddComponent'
import AddCollaboratiion from '../../popups/add/AddCollaboratiion'
import { connect } from 'react-redux'

const Navbar = ({ logout_user, first_name, last_name, city, state, notifications_unseen }) => {

    const [ search, setSearch ] = useState('')

    const [ openNotification, setOpenNotification ] = useState(false);

    const [ openProfile, setOpenProfile ] = useState(false);

    const [ openAdd, setopenAdd ] = useState(false);

    const [ collaborationPopup, setCollaborationPopup ] = useState(false);

    const history = useHistory()

    const handleSubMenuOpen = val => {
        if(val === 'profile'){
            setOpenNotification(false)
            setOpenProfile(!openProfile)
            setopenAdd(false)
        } else if(val === 'notification'){
            setOpenProfile(false)
            setOpenNotification(!openNotification)
            setopenAdd(false)
        } else if(val === 'add'){
            setOpenNotification(false)
            setOpenProfile(false)
            setopenAdd(!openAdd)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(search)
    }

    return (
        <>
        <div className="navbar__Wrapper" >
            <div className="navbar__Left">
                <p>Welcome Back,</p>
                <span>{first_name+' '+last_name}</span>
            </div>
            <div className="navbar__Right">
                <div className="navbar__Search">
                    <form onSubmit={handleSubmit} >
                        <div className="navbar__InputDiv">
                            <input 
                                type="text"
                                value={search}
                                onChange={e=>setSearch(e.target.value)}
                                placeholder="Search"
                                required
                            />
                            <label><SearchRounded fontSize="small" /></label>
                        </div>
                    </form>
                </div>
                <div className="navbar__Notifications">
                    <IconButton size="medium" onClick={()=>handleSubMenuOpen('add')}>
                        <AddRounded/>
                    </IconButton>
                    <ul style={openAdd?{display: "block"}:{display: "none"}}>
                        <li onClick={()=>setCollaborationPopup(true)} ><AddComponent/></li>
                    </ul>
                </div>
                <div className="navbar__Notifications">
                    <IconButton size="medium" onClick={()=>handleSubMenuOpen('notification')}>
                        <Badge badgeContent={notifications_unseen.length} color="primary">
                            <NotificationsRounded/>
                        </Badge>
                    </IconButton>
                    <ul style={openNotification?{display: "block"}:{display: "none"}}>
                        {notifications_unseen.map((val, key)=>{
                            return <li key={key}><Notification /></li>
                        })}
                        <li onClick={()=>history.push('/notifications')} >
                            <div className="notification__OpenPage">
                                <p>View More<ChevronRightRounded/></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar__Profile">
                    <IconButton size="medium" onClick={()=>handleSubMenuOpen('profile')}>
                        <Badge badgeContent={0} color="primary">
                            <PersonRounded/>
                        </Badge>
                    </IconButton>
                    <ul style={openProfile?{display: "block"}:{display: "none"}}>
                        <div className="navbar__User">
                            <img
                                src={image}
                                alt="profile"
                            />
                            <div className="navbar__UserDetails">
                                <h6>{first_name+' '+last_name}</h6>
                                <p>{city+', '+state}</p>
                            </div>
                        </div>
                        <li><ProfileNavigation icon={<PersonRounded fontSize="small" />} text="View Profile" path="/profile" /></li>
                        <li><ProfileNavigation icon={<EditRounded fontSize="small" />} text="Edit Profile" path="/edit-profile" /></li>
                        <li><ProfileNavigation icon={<SubjectRounded fontSize="small" />} text="Edit Resume" path="/edit-resume" /></li>
                        <li><ProfileNavigation icon={<SettingsRounded fontSize="small" />} text="Settings" path="/settings" /></li>
                        <li onClick={()=>logout_user()} ><ProfileNavigation icon={<PowerSettingsNewRounded fontSize="small" />} text="Logout" path="" /></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={collaborationPopup?"navbar__CollaborationPopup navbar__CollaborationDisplay":"navbar__CollaborationPopup"}>
            <div className="navbar__CollaborationInnerDiv" >
                <AddCollaboratiion setCollaborationPopup={setCollaborationPopup} />
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    first_name: state.Login.first_name,
    last_name: state.Login.last_name,
    city: state.Login.city,
    state: state.Login.state,
    notifications_unseen: state.Notifications.notifications_unseen,
})

export default connect(mapStateToProps, { logout_user })(Navbar)