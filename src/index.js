const express = require('express');
const app = express();
const path = require('path');

//config
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Midleware


//routes
app.use(require('./routes/index'));

//static files


//server port
app.listen(app.get('port'), () => {

    console.log('Server on port', app.get('port'));

});