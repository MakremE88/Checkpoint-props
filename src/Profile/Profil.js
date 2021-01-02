import React from 'react';
import PropTypes from "prop-types";
const ComponentProfile = ({fullname,bio,profession,age,handleName,children, ...otherProps}) => {
    ComponentProfile.propTypes = {
        fullName : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.oneOf(['Doctor','Engineer','Teacher','Developer','other']),
        handleName : PropTypes.func

    }
    ComponentProfile.defaultProps = {
        profession : 'other',
    }
        handleName()
    return( 
   <div>
       <div>{children}</div>
        <h1>Bonjour, {fullname}</h1>  
        <h2>{bio}</h2>
        <h2>{profession}</h2>
        <h2>{age}</h2>
   </div>
   )
  }

export default ComponentProfile;