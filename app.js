const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const fs = require('fs');
const path = require('path')
const app = express();

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Middleware
const accessLogStream = fs.createWriteStream( //writting morgan logs to file
    path.join(__dirname, 'access.log'),
    { flags: 'a'} //append new logs and not override files
);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined', {stream: accessLogStream}));
app.use(compression());

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.get('/', (req, res) => {
    res.send('sanity check')
});


module.exports = app