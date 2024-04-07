const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const validateUrl = (url) => {
  const errors = {};
  const regex = /^(https?:\/\/)?(www\.)?airbnb\.com(\/.*)?$/;

  if (typeof url !== 'string') {
    errors.typeError = 'URL must be a string.';
  } else if (!url) {
    errors.emptyError = 'Please add url.';
  } else if (!regex.test(url)) {
    errors.patternError = 'Invalid url type.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const linkScraper = async (req, res) => {
  const { url } = req.body;
  const validationResult = validateUrl(url);
  if (!validationResult.isValid) {
    console.error('Validation errors:', validationResult.errors);
  }

  try {
    const { url } = req.body;
    const baseUrl = 'https://www.airbnb.com';

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const html = await page.content();
    const $ = cheerio.load(html);

    const links = [];

    // Find all links that contain href="/rooms/*"
    $('a[href^="/rooms"]').each(function () {
      var href = $(this).attr('href');
      var fullUrl = baseUrl + href;

      if (links.length < 20 && !links.includes(fullUrl)) {
        links.push(fullUrl);
      }
    });

    await browser.close();

    return res.json({ links });
  } catch (error) {
    console.error('Scraping failed:', error);
    return res.status(500).json({ error: 'Failed to scrape the website.' });
  }
};

module.exports = { linkScraper };
