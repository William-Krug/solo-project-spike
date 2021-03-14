const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'my_running_journal',
  host: 'localhost',
  port: 5432,
};

const pool = new pg.Pool(config);

module.exports = pool;
