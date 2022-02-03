const express = require('express');
const cors = require('cors');
// connection à la database
const connection = require('./db_config');

const app = express();
const { setupApp } = require('./routes');

app.use(cors());
app.use(express.json());

setupApp(app);

connection.connect((err) => {
  if (err) {
    console.error(`error connecting:${err.stack}`);
  } else {
    console.log(`connected to database with threadId: ${connection.threadId}`);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`));
