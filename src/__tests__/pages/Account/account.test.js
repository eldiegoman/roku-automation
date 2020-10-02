const rokuLibrary = require("../../../../submodules/roku-automation/jsLibrary/library/rokuLibrary");
const expect = require("chai").expect;
const path = require("path");
const { spawn } = require("child_process");

const config = require("../../../../config");

// const exePath = path.resolve(__dirname, "../../../main");
// const childProcess = spawn(exePath);

let library;

function checkMainCoverLoaded(attrs) {
  return new Promise((resolve) => {
    resolve(attrs.every((item) => item.Value !== "mainAppCover"));
  });
}

describe("Test account page", () => {
  this.skip();
  before(async function (done) {
    this.timeout(25000);
    library = new rokuLibrary.Library(config.rokuIp);
    //await library.launchTheChannel("dev");
    const pathZip = path.resolve(__dirname, "../../../../channel.zip");
    // await library.sideLoad(pathZip, config.rokuUser, config.rokuPass);

    const mainAppCover = await library.getElement(
      { elementData: [{ using: "tag", value: "Rectangle" }] },
      10
    );

    const { Attrs } = mainAppCover;
    console.log("Attrs", Attrs);

    const isLoaded = checkMainCoverLoaded(Attrs);

    isLoaded.then((result) => {
      console.log("isLoaded", result);
      if (!isLoaded) {
        return done();
      }
    });
  });

  it("should launch the channel", async function () {
    this.timeout(15000);
    await library.verifyIsChannelLoaded("dev");
  });

    it(`Should render account sceen`, async function () {
      await library.sendKeys([
        "down",
        "down",
        "down",
        "down",
        "down",
        "down",
        "select",
      ]);

      const res = await library.verifyIsScreenLoaded(
        {
          elementData: [{ using: "text", value: "Membership" }],
        },
        10,
        30
      );
      expect(res).to.equal(true);
    });

  after(async () => {
    //await library.sendKey("home", 4);
    await library.close();
    //childProcess.kill();
  });
});
