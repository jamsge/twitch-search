const express = require("express");
const app = express();
const axios = require('axios')
var cors = require('cors')
app.use(cors())
require('dotenv').config()

app.get('/user/:username', function(req, res){
  if (!req.params.username){
    return res.json({"error": "no username specified"});
  }
  const username = req.params.username;
  console.log(username)

  function getUser(username){
    return axios.get(`https://api.twitch.tv/kraken/channels/${username}`, {
      headers:{
        "client-id": process.env.CLIENT_ID
      }})
      .then(res => {
        return {
          display_name: res.data.display_name,
          followers: res.data.followers
        }
      })
      .catch(err => {
        res.status(err.response.status)
        switch(err.response.status){
          case 404 || 422:
            res.json({
              message:"No channel found."
            })
          default:
        }
      })
  }

  getUser(username)
    .then(data => {
      res.send(data);
    })
})

app.use('/', express.static('../twitch-search/dist/'))

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})
