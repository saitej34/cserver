const express = require('express')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
app.use(cors({origin: '*'}))
app.use(cors({
    origin:['https://codefriend.netlify.app'],
    credentials:true
}));

app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', "https://codefriend.netlify.app");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials',true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
app.use(express.json());
require('./database/connect')
require('./database/model')
require('./database/blogstore')
app.use(require('./routes/route'))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));