import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import RoutingPath from '../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import BrowserCache from '../shared/utils/BrowserCache'

export const SignInView = () => {
    // username är reference till värden och 
    // andra setUsername är namnet till fuktionen.
    // Default värde av userState är Mustafa.  
    // UserProvider wrapper värden och UserContext ger
    // oss tillgång till värden  
    // username är lokal state för här component
    const [username, setUsername] = useState()
    const [, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()
    const login = (e) => {
        e.preventDefault()
        setAuthenticatedUser(username)
        localStorage.setItem(BrowserCache.username, username)
        //sessionStorage.setItem('username', username)
        history.push(RoutingPath.HomeView)
    }
    return (
        <div>
            <form>
                <span>Username: </span><input onChange={(event) => setUsername(event.target.value)} /><br />
                <span>Password: </span><input /><br />
                <button onClick={(e) => login(e)}>Login</button>
            </form>
        </div>
    )
}
