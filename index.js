const express = require('express')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
app.use(cors({origin: '*'}))
app.use(express.json());
require('./database/connect')
require('./database/model')
require('./database/blogstore')
app.use(require('./routes/route'))
const port = process.env.port || 4000;

console.log(port)


app.listen(port)