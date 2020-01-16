import React from "react"

const GenderFilter = props => {
    return(
        <div>
            <label htmlFor="gender">Gender</label>
            <select 
            id="gender"
            name="gender"
            value={props.gender}
            onChange={props.handleChange}
            >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    )
}

export default GenderFilter