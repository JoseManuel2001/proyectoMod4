const axios = require('axios');

const getWeather = async (city) => {
    try {
        const apiKey = process.env.API_KEY;

        const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(city)}`;

        const response = await axios.get(url);

        // Verificar si hubo un error en la API
        if (response.data.error) {
            throw new Error(response.data.error.info);
        }

        return {
            ciudad: response.data.location.name,
            pais: response.data.location.country,
            region: response.data.location.region,
            temperatura: response.data.current.temperature,
            descripcion: response.data.current.weather_descriptions[0],
            icono: response.data.current.weather_icons[0],
            humedad: response.data.current.humidity,
            viento: response.data.current.wind_speed,
            sensacion: response.data.current.feelslike,
            astro: response.data.current.astro
        };

    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getWeather
};