const express = require('express');
const cors = require('cors');
const { linkScraper } = require('./scrapers/linkScraper');
const { contentScraper } = require('./scrapers/contentScraper');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.post('/get-links', linkScraper);
app.post('/get-content', contentScraper);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
