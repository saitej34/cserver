const express = require('express')
const dotenv = require('dotenv')
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors({origin:'*'}))
require('./database/connect')
require('./database/model')
require('./database/blogstore')
app.use(require('./routes/route'))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));