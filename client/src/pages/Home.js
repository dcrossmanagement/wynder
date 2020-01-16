import React from "react"
import axios from "axios"

const distance = (point1, point2) => {
  let lat1 = Number(point1.latitude)
  let lat2 = Number(point2.latitude)
  let lon1 = Number(point1.longitude)
  let lon2 = Number(point2.longitude)


	if ((lat1 === lat2) && (lon1 === lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		return dist;
	}
}

class Home extends React.Component {
    state = {
      people: [],
      gender: "all",
      minAge: 18,
      maxAge: 100,
      query: "",
      latitude: null,
      longitude: null,
      radius: 5000,
      loading: true
    }

    componentDidMount() {
      axios.get("/users")
      .then(response => this.setState({people: response.data, loading: false}))
      navigator.geolocation.getCurrentPosition(
        position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
        () => console.log("Something went wrong"),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    }

    handleChange = event => {
      this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {people, gender, minAge, maxAge, query, latitude, longitude, radius, loading} = this.state
        return(
            <>
              <div id="top">
                <div id="header">
                  <h1>Wynder</h1>
                  <input
                    type="text"
                    name="query"
                    value={query}
                    onChange={this.handleChange}
                    placeholder="Search"
                    autoComplete="off"
                  />
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
                          name="minAge"
                          min="18"
                          max="100"
                          value={minAge}
                          onChange={this.handleChange}
                        />
                        <label>to</label>
                        <input
                          type="number"
                          name="maxAge"
                          min="18"
                          max="100"
                          value={maxAge}
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
                        />
                        {radius} mi
                    </div>
                  }
                  </div>  
              </div>
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