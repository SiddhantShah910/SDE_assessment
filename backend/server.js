const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/country/:name', async (req, res) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.name}`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching country data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
