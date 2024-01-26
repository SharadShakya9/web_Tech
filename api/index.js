const express = require('express')
const router = require('./routes')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(router)

// app.post('/:name', function (req, res) {
//     console.log(res.body)
//     res.send({
//         query: req.query,
//         params: req.params,
//         body: req.body
//     })
// })

app.use((error, req, resp, next) => {
    resp.status(error.status || 500)

    resp.send({error: error.message || 'Server error.'})
})

app.listen(3000, async () => {
    console.log("Server started at http://localhost:3000")
    await mongoose.connect('mongodb+srv://shakyasharad9:mong0sharad4@mern-blog.sozzvwl.mongodb.net/?retryWrites=true&w=majority')
    console.log('MongoDB connected')
}) //port_number