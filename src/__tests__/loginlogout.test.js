import * as assert from "assert";
import cabbie from "cabbie-sync";

const driver = cabbie("chromedriver", {
  base: "http://localhost:3000",
  debug: true,
});

driver.activeWindow.navigateTo("/");
const input = driver.activeWindow.getElement('[datatestid="loginEmail"]');
input.sendKeys("FakeEmail@email.com");

input = driver.activeWindow.getElement('[data-test-id="loginPassword"]');
input.sendKeys("end2endTesting");

input = driver.activeWindow.getElement('[data-test-id="loginSubmit"]');
button.mouse.click();

input = driver.activeWindow.getElement('[data-test-id="logout"]');
button.mouse.click();

input = driver.activeWindow.getElement('[data-test-id="loginEmail"]');
assert.equal(input.getAttribute("value"), "");

driver.dispose();
