import React from "react";
import "./css/userphoto.css";
import logo from "../src/assets/logo.svg";

class UserPhoto extends React.Component{
    render(){
        return(
            
            <span className="userphoto"><img src={logo} alt="logo" id="logoimg"/>,OPD</span>
        )
    }
}
 export default UserPhoto;