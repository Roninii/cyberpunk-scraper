const puppeteer = require('puppeteer');

async function getStoreData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.cyberpunk.net/us/en/pre-order');

  const storeData = await page.evaluate(() => {
    return window.storeData;
  });

  await browser.close();
  return storeData;
}

module.exports = {
  getStoreData,
};
