// import express from 'express'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('Hello from api!')
})

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`)
})