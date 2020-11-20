import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import BrowserCache from '../../shared/utils/BrowserCache'
import './Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()
    const logout = () => {
        setAuthenticatedUser()
        localStorage.removeItem(BrowserCache.username)
        history.push(RoutingPath.HomeView)
    }
    return (
        <div className="signIn">
            <img className="profieImg"
                src={'https://thispersondoesnotexist.com/image'} alt={'Error...'}
                style={{ width: 35 }} />
            {/* authenticatedUser vissar att vilken användare är logged in */}
            <span >{authenticatedUser}</span>
            <div className="profileDropDown">
                <span onClick={() => history.push(RoutingPath.SettingsView)}>Settings</span>
                <span onClick={() => logout()}>Logout</span>
            </div >
        </div>
    )
}
