const express = require('express')
const mongoose = require('mongoose')
const mongoDbSong = require('./models/songlist')
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(`Db is Sucessfully completed`))
.catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`successfully completed`)
})

app.get("/", (req, res) => {
    try {
      res.status(200).json({ msg: "I am in home route" });
    } catch (error) {
      res.status(500).json({ msg: "Error in home route" });
    }
});
  
app.post('/postsongs', (req, res) => {
    mongoDbSong.create(req.body)
    .then(list => res.json(list))
    .catch(err => res.json(err))
})
