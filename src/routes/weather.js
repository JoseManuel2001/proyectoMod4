const express = require('express');
const router = express.Router();

const { getWeather } = require('../utils/weatherService');

router.get('/', async (req, res) => {

    const city = req.query.city;

    if (!city) {
        return res.render('index', {
            title: 'Consulta el ',
            title2: 'clima',
            description: 'Obtén información actualizada sobre el clima en tu ciudad en tiempo real ⚡'
        });
    }

    try {

        const weather = await getWeather(city);

        res.render('index', {
            title: 'Consulta el ',
            title2: 'clima',
            description: 'Obtén información actualizada sobre el clima en tu ciudad en tiempo real ⚡',
            weather
        });

    } catch (error) {

        res.render('index', {
            title: 'Consulta el ',
            title2: 'clima',
            description: 'Obtén información actualizada sobre el clima en tu ciudad en tiempo real ⚡',
            error: error.message
        });

    }

});

module.exports = router;