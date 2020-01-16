import React from "react"

const AgeFilter = props => {
    return(
        <div>
            <input
                type="number"
                name="minAge"
                min="18"
                max="100"
                value={props.minAge}
                onChange={props.handleChange}
            />
            <label>to</label>
            <input
                type="number"
                name="maxAge"
                min="18"
                max="100"
                value={props.maxAge}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default AgeFilter