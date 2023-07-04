const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan('common'));

const routerProduct = require('./routers/productRouter')

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Failed to connect to database', error);
    });

app.use('/v1',routerProduct)

app.listen(process.env.PORT || 3000, () => {
    console.log("listen on port " + process.env.PORT)
})