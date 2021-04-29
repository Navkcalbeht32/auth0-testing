import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
            <div className='user-data'>
                <img src={user.picture} />
                <div className='user-data-text'>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
        )
        
    )
}

export default Profile
