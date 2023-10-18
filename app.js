const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); 
const port = 8080;

app.use(cookieParser());

app.get('/login', (req, res) => {
    const { name } = req.query; 
}) 