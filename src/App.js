import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from "react-router-dom"
import { authRoutes, userRoutes } from './routes/AllRoutes'
import Authmiddleware from './routes/AuthMiddleware'
import "./assets/scss/app.scss"
import Layout from './hocs/Layout'
import { load_user, check_authentication, fetch_unseen_notifications } from "./store/actions"
import NonAuthLayout from './hocs/NonAuthLayout'
import { connect } from 'react-redux'

const App = ({ load_user, check_authentication, fetch_unseen_notifications }) => {

    useEffect(()=>{
        check_authentication()
        load_user()
        fetch_unseen_notifications()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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

export default connect(null, { load_user, check_authentication, fetch_unseen_notifications })(App)