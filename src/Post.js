import React from "react";
import UserPhoto from "./UserPhoto";
import "./css/post.css"

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <UserPhoto />
                <div>This is a Post</div>

            </div>

        )
    }
}
export default Post;