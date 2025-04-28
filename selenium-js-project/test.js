const { Builder, By, Key } = require('selenium-webdriver');

(async function searchGoogle() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com');
    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Hello World', Key.RETURN);

    console.log(await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();
