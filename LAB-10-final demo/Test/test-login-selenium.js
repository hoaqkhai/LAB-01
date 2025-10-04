// test/test_login_selenium.js
const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Login Form Testing", function () {
  this.timeout(30000); // cho Selenium đủ thời gian chạy
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("Login thành công", async () => {
    await driver.get("http://localhost:3000/login"); // URL form login của bạn

    await driver.findElement(By.name("username")).sendKeys("employee1");
    await driver.findElement(By.name("password")).sendKeys("123456");
    await driver.findElement(By.css("button[type=submit]")).click();

    let message = await driver
      .wait(until.elementLocated(By.id("successMsg")), 5000)
      .getText();

    expect(message).to.include("Chào mừng");
  });

  it("Sai mật khẩu", async () => {
    await driver.get("http://localhost:3000/login");

    await driver.findElement(By.name("username")).sendKeys("employee1");
    await driver.findElement(By.name("password")).sendKeys("wrongpass");
    await driver.findElement(By.css("button[type=submit]")).click();

    let error = await driver
      .wait(until.elementLocated(By.id("errorMsg")), 5000)
      .getText();

    expect(error).to.include("Sai mật khẩu");
  });

  it("Empty input", async () => {
    await driver.get("http://localhost:3000/login");

    await driver.findElement(By.css("button[type=submit]")).click();

    let error = await driver
      .wait(until.elementLocated(By.id("errorMsg")), 5000)
      .getText();

    expect(error).to.include("Không được để trống");
  });
});
