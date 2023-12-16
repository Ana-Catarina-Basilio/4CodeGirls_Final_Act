import React from "react";


function Team(props) {

    const nameStyle = {
        color:props.color,
        
      };

  return (
    <div className="team-container">
    <h1 className="team-names" style={nameStyle}>
    {props.name}
    </h1>
    <ul className="hobbies heading">
    <li className="hobbies">My favourite hobby is {props.hobby}</li>
    <li className="hobbies"> I do this because {props.reason}</li>
    </ul>
    </div>
  )
}

export default Team;