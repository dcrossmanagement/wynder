import React from "react"

import distance from "../functions/Distance"
import Person from "./Person"

const Results = props => {
    const {people, gender, minAge, maxAge, query, latitude, longitude, radius, loading} = props
    return(
        <div id="people">
            {loading && <h3>Loading...</h3>}
            {
            people.filter((person) => {
                if(gender === "all") {
                return true
                }
                else {
                return person.gender === gender
                }
            })
            .filter(person => person.dob.age >= minAge && person.dob.age <= maxAge)
            .filter(person => {
                if(!latitude || !longitude) {
                return true
                }
                else {
                return distance(person.location.coordinates, {latitude, longitude}) <= radius
                }
            })
            .filter(person => {
                if(!query) {
                return true
                }
                else {
                return person.name.first.toLowerCase().startsWith(query.toLowerCase()) ||
                        person.name.last.toLowerCase().startsWith(query.toLowerCase())
                }
            })
            .map((person, index) => {
                return(
                    <Person person={person} key={index}/>
                )
            })
            }
        </div>
    )
}

export default Results