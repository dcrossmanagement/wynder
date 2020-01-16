import React from "react"
import axios from "axios"

class Home extends React.Component {
    state = {
      people: [],
      gender: "all",
      minAge: 18,
      maxAge: 100}

    componentDidMount() {
      axios.get("/users")
      .then(response => this.setState({people: response.data}))
    }

    handleChange = event => {
      this.setState({gender: event.target.value})
    }

    render() {
        const {people, gender, minAge, maxAge} = this.state
        return(
            <>
              <div id="top">
                <div id="header">
                  <h1>Wynder</h1>
                </div>
                  <div id="controls">
                    <div>
                      <label htmlFor="gender">Gender</label>
                      <select 
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={this.handleChange}
                      >
                          <option value="all">All</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                    </div>  
                    <div>
                        <input
                          type="number"
                          min="18"
                          max="100"
                        />
                        <label>to</label>
                        <input
                          type="number"
                          min="18"
                          max="100"
                        />
                    </div>
                    <div>
                        <label>Radius</label>
                        <input
                          id="radius"
                          type="range"
                          min="0"
                          max="5000"
                        />
                    </div>
                  </div>  
              </div>
              <div id="people">
                  {
                    people.filter((person) => {
                      if(gender === "all") {
                        return true
                      }
                      else {
                        return person.gender === gender
                      }
                    })
                    .map((person, index) => {
                      return(
                        <div key={index} className={`person ${person.gender}`}>
                          <div>{person.name.first} {person.name.last}</div>
                          <img src={person.picture.medium} alt="profile-pic"/>
                          <div>{person.dob.age}</div>
                        </div>
                      )
                  })
                }
              </div>

            </>
        )
    }
}

export default Home