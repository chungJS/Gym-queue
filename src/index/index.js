const express = require('express');
const app = express();

app.use(express.json());

const controller = require('./controller/controller.js');
app.use("/",controller);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});