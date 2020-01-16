import React from "react"
import GenderFilter from "./GenderFilter"
import AgeFilter from "./AgeFilter"
import LocationFilter from "./LocationFilter"

const Filters = props => {
    const {gender, minAge, maxAge, latitude, longitude, radius} = props
    return(
        <div id="controls">
            <GenderFilter gender={gender} handleChange={props.handleChange}/>  
            <AgeFilter minAge={minAge} maxAge={maxAge} handleChange={props.handleChange}/>
            { latitude !== null && longitude !== null &&
             <LocationFilter radius={radius} handleChange={props.handleChange}/>
            }
            </div>
    )
}

export default Filters