const path = require('path')
const express = require('express')
const morgan = require('morgan')
const data = require('./data/DATA.json')

// config express
const app = express()
const PORT = process.env.PORT || 3030
app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, 'build')))

// prepare the data
const shelves = data.shelves.map(shelf => {
    shelf.products = [];
    return shelf;
})
const products = [...data.products];
products.forEach(product => shelves[product.shelf - 1].products.push(product))

//api routing
app.get('/api/store', (req, res) => {
    res.json(data.store)
})

app.get('/api/shelves', (req, res) => {
    res.json(shelves)
})

app.get('/api/:shelfNum/products', (req, res) => {
    const shelf = shelves[req.params.shelfNum - 1].products
    res.json(shelf)
})

//return client SPA - relevant only in production mode...
//dev mode is running the dev-server of create-react-app...
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

//start server
app.listen(PORT, () => console.log(`Listening to port --> ${PORT}`))