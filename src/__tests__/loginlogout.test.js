import * as assert from "assert";
import cabbie from "cabbie-sync";

const driver = cabbie("chromedriver", {
  base: "http://localhost:3000",
  debug: true,
});

it("logs in and out with dummy user", () => {
  driver.activeWindow.navigateTo("/");
  var input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  input.sendKeys("FakeEmail@email.com");

  input = driver.activeWindow.getElement('[dataTestId="loginPassword"]');
  input.sendKeys("end2endTesting");

  input = driver.activeWindow.getElement('[dataTestId="loginSubmit"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="logout"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  assert.equal(input.getAttribute("value"), "");

  driver.dispose();
});
