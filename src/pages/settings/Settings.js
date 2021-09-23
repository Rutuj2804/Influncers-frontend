import { Brightness4Rounded, ChevronRightRounded, ContactSupportRounded, DeleteRounded, TouchAppRounded } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Paper from '../../components/commons/paper/Paper'
import Switch from '@material-ui/core/Switch';

const Settings = () => {

    const [ darkMode, setDarkMode ] = useState(false)

    const handleDarkModeChange = (val) => {
        setDarkMode(val)
        localStorage.setItem('theme-dark', val)
        if(val){
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    } 

    useEffect(()=>{
        if(localStorage.getItem('theme-dark')){
            setDarkMode(true);
        }
    }, [])

    return (
        <div className="pt-5">
            <Paper>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="settings__Left">
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <Brightness4Rounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Dark mode</h6>
                                        <p>Switch between dark and light mode</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={darkMode}
                                    onChange={e=>handleDarkModeChange(e.target.checked)}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <ContactSupportRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Help</h6>
                                        <p>Get quick FAQs, if not satisfied directly connect with our customer care</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <TouchAppRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Manage rounded</h6>
                                        <p>Change visibility of your account</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <Brightness4Rounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Dark mode</h6>
                                        <p>Switch between dark and light mode</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={darkMode}
                                    onChange={e=>setDarkMode(e.target.checked)}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <ContactSupportRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Help</h6>
                                        <p>Get quick FAQs, if not satisfied directly connect with our customer care</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <TouchAppRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Manage rounded</h6>
                                        <p>Change visibility of your account</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <Brightness4Rounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Dark mode</h6>
                                        <p>Switch between dark and light mode</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={darkMode}
                                    onChange={e=>setDarkMode(e.target.checked)}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <TouchAppRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Manage rounded</h6>
                                        <p>Change visibility of your account</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <Brightness4Rounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Dark mode</h6>
                                        <p>Switch between dark and light mode</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={darkMode}
                                    onChange={e=>setDarkMode(e.target.checked)}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <TouchAppRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Manage rounded</h6>
                                        <p>Change visibility of your account</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                            <div className="settings__Div">
                                <div className="settings__StatusDesc">
                                    <Brightness4Rounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Dark mode</h6>
                                        <p>Switch between dark and light mode</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={darkMode}
                                    onChange={e=>setDarkMode(e.target.checked)}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            <div className="settings__Div settings__Delete">
                                <div className="settings__StatusDesc">
                                    <DeleteRounded fontSize="large" />
                                    <div className="settings__StatusName" >
                                        <h6>Delete Account</h6>
                                        <p>Your Account and progress will get permanently deleted from our database</p>
                                    </div>
                                </div>
                                <ChevronRightRounded />
                            </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Settings
