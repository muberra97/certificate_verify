const express = require('express')
const users = require("./data/participant.js");

/**
 * Express App
 */
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
require('./routes/routes')(app)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port 3000`)
})

