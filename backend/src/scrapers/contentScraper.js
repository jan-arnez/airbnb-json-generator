const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

// Extract numeric value from text
const extractNumber = (text) => {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
};

// Function to scrape data from a single URL
const scrapeUrl = async (browser, url) => {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const html = await page.content();
  const $ = cheerio.load(html);

  const olSelector = 'ol.lgx66tx.atm_gi_idpfg4.atm_l8_idpfg4.dir.dir-ltr';

  // main title
  const mainTitle = $('h1.hpipapi').first().text();

  // subtitle
  const subtitle = $('h2.hpipapi').first().text();

  // specifications object
  const specifications = {
    guests: extractNumber($(`${olSelector} li`).eq(0).text()),
    bedrooms: extractNumber($(`${olSelector} li`).eq(1).text()),
    beds: extractNumber($(`${olSelector} li`).eq(2).text()),
    baths: extractNumber($(`${olSelector} li`).eq(3).text()),
  };

  // All images
  const images = $('img.itu7ddv')
    .map((_, el) => ({
      src: $(el).attr('src'),
      alt: $(el).attr('alt') || '',
    }))
    .get();

  // All "book-it" info
  const bookingInfo = (() => {
    const bookItSidebar = $(`[data-plugin-in-point-id="BOOK_IT_SIDEBAR"]`);
    const totalpriceText = bookItSidebar.find(`span._1y74zjx`).text();
    const totalPriceUnit = bookItSidebar.find(`span._1w7bwz8`).text();
    const numberOfGuestsText = bookItSidebar.find(`._j1kt73`).text();

    return {
      totalPrice: extractNumber(totalpriceText),
      totalPriceUnit,
      numberOfGuests: extractNumber(numberOfGuestsText),
    };
  })();

  await page.close();

  return { url, mainTitle, subtitle, specifications, images, bookingInfo };
};

// Main scraping function
const contentScraper = async (req, res) => {
  const { links } = req.body;

  if (!links || !Array.isArray(links)) {
    return res.status(400).json({ error: 'Please provide an array of URLs.' });
  }

  try {
    const browser = await puppeteer.launch({ headless: true });
    const results = await Promise.all(
      links.map((url) => scrapeUrl(browser, url))
    );
    await browser.close();
    res.json(results);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Failed to fetch content due to an internal error.' });
  }
};

module.exports = { contentScraper };
