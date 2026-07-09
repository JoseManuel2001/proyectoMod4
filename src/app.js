const path = require('path');
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../views/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Consulta del Clima',
        description: 'Obtén información actualizada sobre el clima en tu ciudad en tiempo real.'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});