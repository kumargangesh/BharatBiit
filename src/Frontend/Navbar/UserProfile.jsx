import React, { useState } from 'react';
import "./UserProfileDesign.css";

export default function UserProfile(props) {

    const[email, setEmail] = useState(props.user.email);
    const[password, setPassword] = useState(props.user.password);

    return (
        <div className="userprofile">
            <div className="usericon">
                <button>{((email.toString()).charAt(0)).toUpperCase()}</button>
            </div>

            <div className="userdetails">
                <h3>User Profile</h3>
                <div className="profileform">
                    <div className="d-flex justify-content-between">
                        <p>Email: </p>
                        <input type="email" value={email} readOnly />
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Password: </p>
                        <input type="text" value={password} readOnly />
                    </div>
                </div>
            </div>
        </div>
    )
}
