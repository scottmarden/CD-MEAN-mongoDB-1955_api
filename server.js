const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client/static')));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(3316, () => console.log("listening on 3316"));
