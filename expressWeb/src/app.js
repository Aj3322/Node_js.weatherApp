const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//public static path

const filepath = path.join(__dirname,"../public");
console.log(filepath);
app.use(express.static(filepath));


// Define a route for the root path
app.get('/', (req, res) => {
 res.send('Hello World!');
});

// Define a route for the /about path
app.get('/about', (req, res) => {
 res.send('About Page');
});
app.get('/weather', (req, res) => {
    res.send('Weather Page');
   });
app.get('*', (req, res) => {
    res.send('404 Page');
   });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
   });

