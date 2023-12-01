const dotenv = require('dotenv');
dotenv.config();

const envVariables = {
    PORT: process.env.PORT,
}

module.exports = envVariables;