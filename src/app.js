const path = require('path');
const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv');

const result = dotenv.config();

console.log(result);
console.log("API_KEY:", process.env.API_KEY);

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../views/partials');
const weatherRoutes = require('./routes/weather');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.use('/weather', weatherRoutes);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Consulta el ',
        title2: 'clima',
        description: 'Obtén información actualizada sobre el clima en tu ciudad en tiempo real ⚡'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});