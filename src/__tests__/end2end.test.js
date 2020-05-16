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
});

it("logs in, creates a loreline, chooses that loreline, creates a custom entity,\
  deletes that custom entity, deletes the loreline, and logs out with dummy user", () => {
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

  input = driver.activeWindow.getElement('[dataTestId="directoryLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="newEntityButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="entityName"]');
  input.sendKeys("test entity");

  input = driver.activeWindow.getElement('[dataTestId="addFieldButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="textField"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="fieldName"]');
  input.sendKeys("test field");

  input = driver.activeWindow.getElement('[dataTestId="confirmCreateEntity"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelinesLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="directoryLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="deleteEntityButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelinesLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="deleteButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="confirmDelete"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="logout"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="loginEmail"]');
  assert.equal(input.getAttribute("value"), "");
});

it("logs in, creates a loreline, chooses that loreline, creates a custom entity,\
  creates an instance of the custom entity, deletes that instance,\
  deletes the custom entity, deletes the loreline, and logs out with dummy user", () => {
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

  input = driver.activeWindow.getElement('[dataTestId="directoryLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="newEntityButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="entityName"]');
  input.sendKeys("test entity");

  input = driver.activeWindow.getElement('[dataTestId="addFieldButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="textField"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="fieldName"]');
  input.sendKeys("test field");

  input = driver.activeWindow.getElement('[dataTestId="confirmCreateEntity"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelinesLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="directoryLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="createInstanceButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="instanceName"]');
  input.sendKeys("test instance");

  input = driver.activeWindow.getElement('[dataTestId="fieldContent"]');
  input.sendKeys("field content");

  input = driver.activeWindow.getElement(
    '[dataTestId="confirmCreateInstance"]'
  );
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelinesLink"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="directoryLink"]');
  input.mouse.click();

  //extend dropdown and delete instance

  input = driver.activeWindow.getElement('[dataTestId="deleteEntityButton"]');
  input.mouse.click();

  input = driver.activeWindow.getElement('[dataTestId="lorelinesLink"]');
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
