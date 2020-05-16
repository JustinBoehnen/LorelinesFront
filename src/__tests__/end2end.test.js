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
});

it("logs in, changes to light mode, and logs out with dummy user", () => {
  driver.activeWindow.navigateTo("/");
  var input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  input.sendKeys("FakeEmail@email.com");

  input = driver.activeWindow.getElement('[dataTestId="loginPassword"]');
  input.sendKeys("end2endTesting");

  input = driver.activeWindow.getElement('[dataTestId="loginSubmit"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="accountLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lightModeButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="darkModeButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="logout"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  assert.equal(input.getAttribute("value"), "");
});

it("logs in, creates a loreline, chooses that loreline, deletes that loreline,\
  and logs out with dummy user", () => {
  driver.activeWindow.navigateTo("/");
  var input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  input.sendKeys("FakeEmail@email.com");

  input = driver.activeWindow.getElement('[dataTestId="loginPassword"]');
  input.sendKeys("end2endTesting");

  input = driver.activeWindow.getElement('[dataTestId="loginSubmit"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelinesLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="newLorelineButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelineName"]');
  input.sendKeys("test loreline");

  input = driver.activeWindow.getElement('[dataTestId="createButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="selectLoreline"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="deleteButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="confirmDelete"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="logout"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  assert.equal(input.getAttribute("value"), "");
  driver.dispose();
});
