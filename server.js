const express = require('express');
const cors = require('cors');
const { getStoreData } = require('./api/storeData.js');

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  const storeData = await getStoreData();
  res.json(storeData);
});

app.listen(3000, () => console.log(`server is listening on port 3000`));
