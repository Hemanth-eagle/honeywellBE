const express = require('express');
const data = require('./cityData.js');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send("hemanth's(Durga prasad) honey well BE!");
});
// Define a route to get all cities Data
app.get('/cities', (req, res) => {
    res.send(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});