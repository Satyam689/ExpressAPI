require('dotenv').config();
const express = require("express");
const _ = require("lodash");
const blogStats = require("./controllers/blog-status");
const blogSearch = require("./controllers/blogSearch");

const app = express();


app.get('/api/blog-stats', blogStats);

app.get('/api/blog-search', blogSearch);


app.all('*',(req, res) => {
    res.status(500).json({ error: 'An error occurred.' });
});


const port = process.env.PORT || 3000; 


app.listen(port, () => {
 console.log(`App is listening on ${port}`);
});