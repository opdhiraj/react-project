import React from "react";
import UserPhoto from "./UserPhoto";
import "./css/chatlist.css"

class ChatList  extends React.Component{
     render(){
         return(
             <div>
                 <div className="chatlist"><UserPhoto/>user1</div>
                 <div className="chatlist"><UserPhoto/>user2</div>
                 <div className="chatlist"><UserPhoto/>user3</div>
                 <div className="chatlist"><UserPhoto/>user4</div>
                 <div className="chatlist"><UserPhoto/>user5</div>
                 <div className="chatlist"><UserPhoto/>user6</div>
                 <div className="chatlist"><UserPhoto/>user7</div>
                 <div className="chatlist"><UserPhoto/>user8</div>
             </div>
         )
     }
 }
 export default ChatList;