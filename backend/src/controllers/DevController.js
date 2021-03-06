const axios = require('axios')
const Dev  = require('../models/Dev')
const ParseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
    async index (req, response) {
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store (req, response) {
        const { github_username, techs, latitude, longitude } = req.body
    
        let dev = await Dev.findOne({github_username})

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, avatar_url, bio } = apiResponse.data
            const techsArray = ParseStringAsArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        
        console.log(dev)

        return response.json(dev)
    }
}