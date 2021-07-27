import React from "react";
import "../css/avatar.css"

class Avatar extends React.Component {
    handleClick=()=>{
        // console.log("button clicked")
        // console.log(this.props.name+" clicked")
        window.alert(this.props.name+" clicked")
    }

    // showAlert() {
    //     window.alert("clicked")
    // }


    render() {

        const name = this.props.name;
        console.log(this.props);

        const initials = name
            .split(" ")
            .map((segment) => segment[0])
            .join("");


        return (
            <div onClick={this.showAlert}>
                <h2>This is class component</h2>

                <div className={`avatar ${this.props.isMarried ? 'married' : ''}`}>
                    {initials}
                </div>
                {name},
                {this.props.age} <br/>
                <button onClick={this.handleClick}>Click</button>

            </div>


        )
    }
}

export default Avatar;