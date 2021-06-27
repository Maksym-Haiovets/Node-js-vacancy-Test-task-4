import { HOST, PORT, USERNAME, PASSWORD, DATABASE_NAME} from './const'
const Pool = require('pg').Pool
const pool = new Pool({
    user: USERNAME,
    password: PASSWORD,
    host: HOST,
    port: PORT,
    database: DATABASE_NAME
})
module.exports = pool;