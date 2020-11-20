import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import './Profile.css'
export const Profile = () => {
    const [authenticatedUser,] = useContext(UserContext)
    const history = useHistory()
    return (
        <div className="signIn">
            <img className="profieImg"
                src={'https://thispersondoesnotexist.com/image'} alt={'Error...'}
                style={{ width: 35 }} />
            {/* authenticatedUser vissar att vilken användare är logged in */}
            <span >{authenticatedUser}</span>
            <div className="profileDropDown">
                <span onClick={() => history.push(RoutingPath.SettingsView)}>Settings</span>
                <span>Logout</span>
            </div >
        </div>
    )
}
