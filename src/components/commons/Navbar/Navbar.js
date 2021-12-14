import { Badge, IconButton } from '@material-ui/core'
import { ChevronRightRounded, EditRounded, NotificationsRounded, AddRounded, PersonRounded, PowerSettingsNewRounded, SearchRounded, SettingsRounded, NotesRounded, ContactSupportRounded, FullscreenRounded } from '@material-ui/icons'
import React, { useEffect, useRef, useState, useContext } from 'react'
import Notification from './Notification'
import ProfileNavigation from './ProfileNavigation'
import image from '../../../assets/images/image.jpg'
import { useHistory } from 'react-router-dom'
import { logout_user, set_seen_notifications, unseen_notification_from_socket } from '../../../store/actions'
import AddComponent from './AddComponent'
import AddCollaboratiion from '../../popups/add/AddCollaboratiion'
import { connect } from 'react-redux'
import { SocketContext } from '../../../store/socket/context'
import moment from 'moment'

const Navbar = ({ logout_user, first_name, last_name, city, state, notifications_unseen, toggle, setToggle, set_seen_notifications, unseen_notification_from_socket, notifications_seen, isCompany }) => {

    const [ search, setSearch ] = useState('')

    const [ openNotification, setOpenNotification ] = useState(false);

    const [ openProfile, setOpenProfile ] = useState(false);

    const [ openAdd, setopenAdd ] = useState(false);

    const [ collaborationPopup, setCollaborationPopup ] = useState(false);

    const [ fullSrceen, setFullSrceen ] = useState(false);

    const history = useHistory()

    const socket = useContext(SocketContext)

    useEffect(()=>{
        socket.on('recieve-notifications', data=>{
            unseen_notification_from_socket(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket])

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
        history.push('/find', {query: search})
    }

    const wrapperRef = useRef();
    const notificationRef = useRef();
    const addRef = useRef();

    useEffect(()=>{
        document.addEventListener('mousedown', e => {
            const { current: wrap } = wrapperRef
            if(wrap && !wrap.contains(e.target)){
                setOpenProfile(false)
            }
        })

        return () => {
            document.removeEventListener('mousedown', e => {
                const { current: wrap } = wrapperRef
                if(wrap && !wrap.contains(e.target)){
                    setOpenProfile(false)
                }
            })
        }
    }, [])

    useEffect(()=>{
        document.addEventListener('mousedown', e => {
            const { current: wrap } = notificationRef
            if(wrap && !wrap.contains(e.target)){
                setOpenNotification(false)
            }
        })

        return () => {
            document.removeEventListener('mousedown', e => {
                const { current: wrap } = notificationRef
                if(wrap && !wrap.contains(e.target)){
                    setOpenNotification(false)
                }
            })
        }
    }, [])

    useEffect(()=>{
        document.addEventListener('mousedown', e => {
            const { current: wrap } = addRef
            if(wrap && !wrap.contains(e.target)){
                setopenAdd(false)
            }
        })

        return () => {
            document.removeEventListener('mousedown', e => {
                const { current: wrap } = addRef
                if(wrap && !wrap.contains(e.target)){
                    setopenAdd(false)
                }
            })
        }
    }, [])

    // full screen
    var elem = document.documentElement;
    function openFullscreen() {
        setFullSrceen(true);
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      }
      
      /* Close fullscreen */
    function closeFullscreen() {
        setFullSrceen(false)
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }

    return (
        <>
        <div className={toggle?"navbar__Wrapper":"navbar__Wrapper navbar__Toggle"} >
            <div className="navbar__Left">
                <IconButton onClick={()=>setToggle(!toggle)}><NotesRounded /></IconButton>
                <div>
                    <p>Welcome Back,</p>
                    <span>{first_name+' '+last_name}</span>
                </div>
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
                {
                    isCompany && <div className="navbar__Notifications" ref={addRef}>
                                        <IconButton size="medium" onClick={()=>handleSubMenuOpen('add')}>
                                            <AddRounded/>
                                        </IconButton>
                                        <ul style={openAdd?{display: "block"}:{display: "none"}}>
                                            <li onClick={()=>setCollaborationPopup(true)}><AddComponent setCollaborationPopup={setCollaborationPopup} /></li>
                                        </ul>
                                    </div>
                }
                
                <div className="navbar__Notifications" >
                    <IconButton size="medium" onClick={()=>fullSrceen?closeFullscreen():openFullscreen()}>
                        <FullscreenRounded/>
                    </IconButton>
                </div>
                <div className="navbar__Notifications" ref={notificationRef}>
                    <IconButton size="medium" onClick={()=>{handleSubMenuOpen('notification');set_seen_notifications();}}>
                        <Badge badgeContent={notifications_unseen.length} color="primary">
                            <NotificationsRounded/>
                        </Badge>
                    </IconButton>
                    <ul style={openNotification?{display: "block"}:{display: "none"}}>
                        {notifications_unseen.map((val, key)=>{
                            return <li key={key}><Notification by_user={val.by_user} text_one={val.text_one} highlighted_text={val.highlighted_text} text_two={val.text_two} time={moment(val.created_at).fromNow()}/></li>
                        })}
                        {notifications_unseen.length < 5 && notifications_seen.slice(0, 5 - notifications_unseen.length).map((val, key)=>{
                            return <li key={key}><Notification by_user={val.by_user} text_one={val.text_one} highlighted_text={val.highlighted_text} text_two={val.text_two} time={moment(val.created_at).fromNow()}/></li>
                        })}
                        <li onClick={()=>history.push('/notifications')} >
                            <div className="notification__OpenPage"  onClick={()=>history.push('/notifications')} >
                                <p>View More<ChevronRightRounded/></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar__Profile" ref={wrapperRef}>
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
                        {/* <li><ProfileNavigation icon={<SubjectRounded fontSize="small" />} text="Edit Resume" path="/edit-resume" /></li> */}
                        {/* <li><ProfileNavigation icon={<DescriptionRounded fontSize="small" />} text="View Resume" path="/view-resume" /></li> */}
                        <li><ProfileNavigation icon={<SettingsRounded fontSize="small" />} text="Settings" path="/settings" /></li>
                        <li><ProfileNavigation icon={<ContactSupportRounded fontSize="small" />} text="Help" path="/help" /></li>
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
    notifications_seen: state.Notifications.notifications,
    isCompany: state.Login.isCompany,
})

export default connect(mapStateToProps, { logout_user, set_seen_notifications, unseen_notification_from_socket })(Navbar)