const express = require('express')
const app = express()
const morgan = require('morgan')
require('./db/connect')
require('dotenv').config()
const index = require('./routes/index')
const auth = require('./routes/auth')
const user = require('./routes/user')
const twit = require('./routes/twit')
const comment = require('./routes/comment')


// Middleware declarations
app.use(express.static('./public'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))

//route middleware declarations
app.use('/index', index)
app.use('/auth', auth)
app.use('/user', user)
app.use('/twit', twit)
app.use('/comment', comment)


//testing router configuration
app.get('/', (req, res) => {
    res.send('<h1> This is Twittee app</h1>')
})


//SERVER DETAILS
const port = process.env.PORT || 5000
//
// const start = async () => {
//     try {
//         await connectDB();
        app.listen(port, console.log(`Server is listening at ${port}`))
//     } catch (err) {
//         console.log(err)
//     }
// }
// start();
