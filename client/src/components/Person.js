import React from "react"

const Person = props => {
    const {person} = props
    return(
        <div className={`person ${person.gender}`}>
            <div>{person.name.first} {person.name.last}</div>
            <img src={person.picture.medium} alt="profile-pic"/>
            <div>{person.dob.age}</div>
        </div>
    )
}

export default Person