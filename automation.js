var webdriver = require("selenium-webdriver"),
By = webdriver.By;

var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://piraiemp.netlify.app/");
driver.manage().window().maximize();
driver.findElement(By.id("fullName")).sendKeys("dhanraj");
driver.findElement(By.id("employeeid")).sendKeys("1714");
driver.findElement(By.id("salary")).sendKeys("30000");
driver.findElement(By.id("city")).sendKeys("coimbatore");
setTimeout(() => { driver.findElement(By.id("submit")).click(); },5000);
setTimeout(() => { console.log("automation done successfully by selenium"); }, 8000);
setTimeout(() => { driver.close() }, 10000);