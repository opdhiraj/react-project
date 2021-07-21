import React from "react";
import ChatList from "./ChatList";
import NewFeed from "./NewFeed";
import ProfileInfo from "./ProfileInfo";
import "./css/facebookapp.css"


class FacebookApp extends React.Component {
    render() {
        return (
            <div >

                <div className="profileinfo">
                    <ProfileInfo />
                </div>
                <div className="items">
                    <NewFeed />
                      <ChatList />
                </div>

            </div>

        )
    }
}
export default FacebookApp;