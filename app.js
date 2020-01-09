const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('file-system');
const app = express();

//routes
const adminRoutes = require('./routes/admin');
const accessLogStream = fs.createWriteStream( //writting morgan logs to file
    path.join(__dirname, 'access.log'),
    { flags: 'a'} //append new logs and not override files
);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined', {stream: accessLogStream}));

app.use('/admin', adminRoutes)
app.get('/', (req, res) => {
    res.send('sanity check')
});


module.exports = app