const express = require("express")
const axios = require("axios")

const app = express()

app.get("/users",(request, response) => {
    axios.get("https://randomuser.me/api/?results=5&nat=us&inc=gender,name,dob,picture,location&seed=wynder")
    .then(randomUserResponse => {
        response.json(randomUserResponse.data.results || [])
    })
})

app.listen(8080)