import React from "react";
import ChatList from "./ChatList";
import NewFeed from "./NewFeed";
import ProfileInfo from "./ProfileInfo";
import "./css/facebookapp.css"
import Header from "./Header";
import Test from "./js jsx/Test";
import Test1 from "./js jsx/Test1";






class FacebookApp extends React.Component {
    render() {
        return (
            <div  className="maincontainer">
                <Header/>
                <div className="profileinfo">
                
                    <ProfileInfo />
                </div>
                <div className="items">
                    <NewFeed />
                      <ChatList />
                      
                     
                </div>
                <Test/>
                <Test1/>
               
            </div>

        )
    }
}
export default FacebookApp;