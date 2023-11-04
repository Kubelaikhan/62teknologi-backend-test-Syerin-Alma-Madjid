require('dotenv').config()
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyPars = require("body-parser");


const businessRoutes = require('./routes/business.js');
const attributesRoutes = require('./routes/attributes.js');
const categoriesRoutes = require('./routes/categorie.js');
const locationRoutes = require('./routes/location.js');
const middlewareLogRequest  = require('./middleware/log.js');


app.use(middlewareLogRequest);
app.use(express.json());

app.use('/business', businessRoutes);
app.use('/attributes', attributesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/location', locationRoutes);

app.use(bodyPars.json());

app.get('/', (req, res) => {
    res.send('Hey! This API is Working.');
  });
  
  
app.listen(port, ()=>{
    console.log(`Port listening on ${port}`)
})