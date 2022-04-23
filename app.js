// Using express object
const express = require('express')
// Express app
const app = express()
app.use(express.json()) // JSON Use enabled
// Localhost port 3000
const port = 3000

// app starting
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id:1, name: 'Carlo1'}
    const explorer2 = {id:2, name: 'Carlo2'}
    const explorer3 = {id:3, name: 'Carlo3'}
    const explorer4 = {id:4, name: 'Carlo4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Carlo"}
    res.status(200).json(explorer)
})

