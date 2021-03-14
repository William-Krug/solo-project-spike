const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = require('./modules/pool');
const adminRouter = require('./routes/admin.router');

app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Listenting on port ${PORT}...`);
});
