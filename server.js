const express = require("express")
const path = require("path")
const axios = require("axios")

const app = express()

app.get("/users",(request, response) => {
    axios.get(`https://randomuser.me/api/?results=${process.env.RESULTS || 500}&nat=us&inc=gender,name,dob,picture,location&seed=wynder`)
    .then(randomUserResponse => {
        response.json(randomUserResponse.data.results || [])
    })
})

if(process.env.NODE_ENV === "production") {
    //Serve any static files
    app.use(express.static(path.join(__dirname, "client/build")))
    //Handle React routing, return all request to React app
    app.get("*", (request, response) => {
        response.sendFile(path.join(__dirname, "client/build", "index.html"))
    })
}

app.listen(process.env.PORT || 8080)