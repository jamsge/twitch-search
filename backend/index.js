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

  // call twich api via axios when "childToParent" event is emitted
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
				console.log(err.toString());
				res.status(500).json({error: err.toString()});
      })
  }
  
  getUser(username)
    .then(data => {
      res.send(data);
    })
})

// serve build from frontend folder
app.use('/', express.static('../frontend/dist/'))

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})
