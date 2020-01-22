const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Search
routes.get('/search', SearchController.index)

// Devs
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

module.exports = routes
