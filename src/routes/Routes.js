import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SignInView } from '../views/SignInView'
import { SettingsView } from '../views/SettingsView'
import RoutingPath from './RoutingPath'
export const Routes = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.SignInView} component={SignInView} />
                <Route exact path={RoutingPath.SettingsView} component={SettingsView} />
                < Route component={HomeView} />

            </Switch>
        </Router>
    )
}