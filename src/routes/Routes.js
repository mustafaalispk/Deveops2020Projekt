import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SignInView } from '../views/SignInView'
import { SettingsView } from '../views/SettingsView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export const Routes = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfNotAuthenticated = (navigateToView) => {
        //if (authenticatedUser) {
        //    return navigateToView
        //} else {
        //    return HomeView && window.history.pushState('page2', 'Title', '/')
        //}
        // Alternativ 2 med Ternary operator
        return authenticatedUser ? navigateToView : SignInView
    }

    const checkIfUserAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem('username'))
    }

    useEffect(() => {
        checkIfUserAuthenticatedInBrowser()
    })
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.SignInView} component={SignInView} />
                <Route exact path={RoutingPath.SettingsView} component={blockRouteIfNotAuthenticated(SettingsView)} />
                < Route component={HomeView} />

            </Switch>
        </Router>
    )
}