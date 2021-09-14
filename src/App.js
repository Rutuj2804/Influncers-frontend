import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Switch } from "react-router-dom"
import { authRoutes, userRoutes } from './routes/AllRoutes'
import Authmiddleware from './routes/AuthMiddleware'
import "./assets/scss/app.scss"
import Layout from './hocs/Layout'
import { load_user, check_authentication, fetch_unseen_notifications, fetch_rooms } from "./store/actions"
import NonAuthLayout from './hocs/NonAuthLayout'
import { connect } from 'react-redux'
import { SocketContext } from './store/socket/context'

const App = ({ load_user, check_authentication, fetch_unseen_notifications, isAuthenticated, fetch_rooms, chat_rooms }) => {

    const socket = useContext(SocketContext)

    useEffect(()=>{
        check_authentication()
        load_user()
        if(isAuthenticated){
            fetch_unseen_notifications()
            fetch_rooms()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isAuthenticated])

    useEffect(()=>{
        chat_rooms.map((val) => {
            socket.emit('join-room', val.id)
        })
    }, [chat_rooms])

    return (
        <div>
        <BrowserRouter>
            <Switch>
                {authRoutes.map((route, idx)=>{
                    return <Authmiddleware
                        key={idx}
                        layout={NonAuthLayout}
                        path={route.path}
                        component={route.component}
                        isAuthProtected={false}
                    />
                })}
                {userRoutes.map((route, idx) => (
                    <Authmiddleware
                        path={route.path}
                        layout={Layout}
                        component={route.component}
                        key={idx}
                        isAuthProtected={true}
                        exact
                    />
                ))}
            </Switch>
        </BrowserRouter>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Login.isAuthenticated,
    chat_rooms: state.Messages.chat_rooms,
})

export default connect(mapStateToProps, { load_user, check_authentication, fetch_unseen_notifications, fetch_rooms })(App)