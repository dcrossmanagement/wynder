import React from "react"
import axios from "axios"

class Home extends React.Component {
    state = {people: []}

    componentDidMount() {
      axios.get("/users")
      .then(response => this.setState({people: response.data}))
    }

    render() {
        return(
            <>
              <div id="top">
                <div id="header">
                  <h1>Wynder</h1>
                </div>
                  <div id="controls">
                    <div>
                      <label htmlFor="gender">Gender</label>
                      <select id="gender">
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
                    this.state.people.map((person, index) => {
                      return(
                        <div key={index} className={`person ${person.gender}`}>
                          <div>{person.name.first} {person.name.last}</div>
                          <img src={person.picture.medium} alt="profile-pic"/>
                          <div>{person.dob.age}</div>
                        </div>
                      )
                  })
                }
                  <div className="person male">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
              </div>

            </>
        )
    }
}

export default Home