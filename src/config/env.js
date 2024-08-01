require('dotenv').config();
const { get } = require('env-var');

// objeto para confirurar variables de entorno

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}


module.exports = {
    envs
}