import { CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/commons/Navbar/Navbar'
import Sidebar from '../components/commons/SideBar/Sidebar'

const Layout = ({ children, loading }) => {

    const [ navbarToggle, setNavbarToggle ] = useState(true);

    return (
        <div>
            <Sidebar toggle={navbarToggle} setToggle={setNavbarToggle}/>
            <Navbar toggle={navbarToggle} setToggle={setNavbarToggle}/>
            <div className={navbarToggle?"layout__Wrapper":"layout__Wrapper layout__Toggle"}>{children}</div>
            {loading?<div className="layout__Loading" ><CircularProgress /></div>:null}
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.Loading.loading
})

export default connect(mapStateToProps)(Layout)