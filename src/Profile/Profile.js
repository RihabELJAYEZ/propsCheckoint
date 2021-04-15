import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
    return (
        <div>
            
            <h1  style={{ color: "pink", fontSize: 40  }}>My profile</h1>
            {props.children}
            <h3 style={{color:'white'}}>Hello, my name is {props.myFullName} and i'm {props.myProf}</h3>
            <p style={{fontSize:'25px'}}> {props.myBio}</p>
            <button onClick={props.myAlert}>Clickme</button>
            
            
        </div>
    )
}
Profile.defaultProps={
    myFullName:"user"
}
Profile.propTypes = {
    myFullName: PropTypes.string,
}

export default Profile
