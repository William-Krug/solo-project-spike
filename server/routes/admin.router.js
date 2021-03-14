const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

/**
 * GET route template
 */
router.get('/communityRuns', (req, res) => {
  console.log('*** router -> GET /api/admin/communityRuns ***');

  sqlQuery = `
    SELECT *
    FROM "activities";
  `;

  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      console.log('GET /api/admin/communityRuns success');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      consol.log('ERROR in GET /api/admin/communityRuns', error);
      res.sendStatus(500);
    });
});

/**
 * GET route template
 */
router.get('/userStates', (req, res) => {
  console.log('*** router -> GET /api/admin/userStates ***');

  sqlQuery = `
    SELECT "users".state, count(*)
    FROM "users"
    GROUP BY "users".state
    ORDER BY "users".state ASC;
  `;

  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      console.log('GET /api/admin/userStates success');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/admin/userStates:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
