import React from "react"

const Filters = props => {
    const {gender, minAge, maxAge, latitude, longitude, radius} = props
    return(
        <div id="controls">
            <div>
                <label htmlFor="gender">Gender</label>
                <select 
                id="gender"
                name="gender"
                value={gender}
                onChange={props.handleChange}
                >
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>  
            <div>
                <input
                    type="number"
                    name="minAge"
                    min="18"
                    max="100"
                    value={minAge}
                    onChange={props.handleChange}
                />
                <label>to</label>
                <input
                    type="number"
                    name="maxAge"
                    min="18"
                    max="100"
                    value={maxAge}
                    onChange={props.handleChange}
                />
            </div>
            { latitude !== null && longitude !== null &&
            <div>
                <label>Radius</label>
                <input
                    id="radius"
                    name="radius"
                    type="range"
                    min="0"
                    max="5000"
                    value={radius}
                    onChange={props.handleChange}
                />
                {radius} mi
            </div>
            }
            </div>
    )
}

export default Filters