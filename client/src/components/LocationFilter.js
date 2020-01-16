import React from "react"

const LocationFilter = props => {
    return (
        <div>
            <label>Radius</label>
            <input
                id="radius"
                name="radius"
                type="range"
                min="0"
                max="5000"
                value={props.radius}
                onChange={props.handleChange}
            />
            {props.radius} mi
        </div>
    )
}

export default LocationFilter