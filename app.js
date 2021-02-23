const express = require('express');
 
const app = express();

app.use(express.static('public'));
 

app.get('/home', (request, response) => response.sendFile('/mnt/c/Users/Master/Desktop/7/Express/lab-express-basic-site/views/home.html'));

app.get('/about', (request, response) => response.sendFile('/mnt/c/Users/Master/Desktop/7/Express/lab-express-basic-site/views/about.html'));

app.get('/mystery', (request, response) => response.sendFile('/mnt/c/Users/Master/Desktop/7/Express/lab-express-basic-site/views/mystery.html'));

app.listen(3000, () => console.log('My first app listening on port 3000!'));
