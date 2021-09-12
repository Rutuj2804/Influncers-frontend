import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/commons/Navbar/Navbar'
import Sidebar from '../components/commons/SideBar/Sidebar'

const Layout = ({ children, loading }) => {
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="layout__Wrapper">{children}</div>
            {loading?<div className="layout__Loading" ><CircularProgress /></div>:null}
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.Loading.loading
})

export default connect(mapStateToProps)(Layout)