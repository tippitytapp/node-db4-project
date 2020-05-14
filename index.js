const server = require('./api/server.js');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

if(ENV === 'development'){
    server.use(morgan('dev'));
}
server.listen(PORT, ()=> {
    console.log(`\n === Server Listening in ${ENV} mode on http://localhost:${PORT} === \n`.magenta.bold.underline)
})
