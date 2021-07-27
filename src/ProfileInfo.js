import React from "react";
import UserPhoto from "./UserPhoto";
import "./css/profileinfo.css"

class ProfileInfo extends React.Component{
    render(){
        return (<div>
            <div id="user">
                <UserPhoto/>
                <span className="username">Name</span>
            </div>


        </div>
        )
    }
}
export default ProfileInfo;