
import React from "react";
import Avatar from "./Avatar";
// import Avatar from "./Avatarfn";



class Test1 extends React.Component {
   

    render() {


        const students = [
         {name:"OM KUMAR",age:26},
         {name:"Prakash SINGH",age:26},
         {name:"Abc RAI",age:26},
         {name:"Cde SINGH",age:26},
         {name:"Xyz RAI",age:26},
            

        ];



        return (
            <div>
                {students.map(people => (
                    <Avatar key={people.name} 
                    name={people.name}
                    age={people.age}
                    isMarried={people.name==="Prakash SINGH"}/>
                       ))}


               

            </div>


        )

    }
}

export default Test1;