require('dotenv').config();

const app = require('./server');
require ('./database');

//Server is Listening
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
    console.log('environment:', process.env.NODE_ENV);
})