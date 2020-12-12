const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyparser.json());
app.use(cors());

//Routes
const wordToPdfRoutes = require('./routes/wordToAll.route');

//apis
app.use('/api/convert',wordToPdfRoutes);

app.listen(4000 , () => {
    console.log('listening on port 4000')
})