import React from "react"

const Search = props => {
    return(
        <div id="header">
            <h1>Wynder</h1>
            <input
            type="text"
            name="query"
            value={props.query}
            onChange={props.handleChange}
            placeholder="Search"
            autoComplete="off"
            />
        </div>
    )
}

export default Search