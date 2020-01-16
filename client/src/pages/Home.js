import React from "react"
import axios from "axios"

import Search from "../components/Search"
import Filters from "../components/Filters"
import Results from "../components/Results"

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
                  <Search query={query} handleChange={this.handleChange}/>
                  <Filters
                    gender={gender}
                    minAge={minAge}
                    maxAge={maxAge}
                    latitude={latitude}
                    longitude={longitude}
                    radius={radius}
                    handleChange={this.handleChange}
                  />  
              </div>
              <Results {...this.state}/>
            </>
        )
    }
}

export default Home