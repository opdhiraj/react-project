
import "../css/avatar.css"

function Avatar (props){
    

        const name= props.name;
        

        const initials= name
        .split(" ")
        .map((segment)=>segment[0])
        .join("");


        return(
            <div>
               <h2>This is  functional component</h2> 
         <div className={`avatar ${props.isMarried ? 'married' : '' }`}>{initials}</div>
         {name},{props.age}

            </div>

          
        )
    
}

export default Avatar;