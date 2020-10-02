const rokuLibrary = require("../../../../submodules/roku-automation/jsLibrary/library/rokuLibrary");
const expect = require("chai").expect;
const path = require("path");
const { spawn } = require("child_process");

const config = require("../../../../config");

// const exePath = path.resolve(__dirname, "../../../main");
// const childProcess = spawn(exePath);

let library;

const menuMap = [
  {
    attr: "text",
    expected: "Featured",
  },
  {
    attr: "text",
    expected: "Movies",
  },
  {
    attr: "text",
    expected: "Hallmark Hall of Fame",
  },
  {
    attr: "text",
    expected: "Tv Series",
  },
  {
    attr: "text",
    expected: "Search",
  },
  {
    attr: "text",
    expected: "Watchlist",
  },
  {
    attr: "text",
    expected: "Account",
  },
];

describe("Test menu with user logged", () => {
  before(async function () {
    this.timeout(5000);
    library = new rokuLibrary.Library(config.rokuIp);

    const pathZip = path.resolve(__dirname, "../../../../channel.zip");
    console.log("pathZip", pathZip);
    //await library.launchTheChannel("dev");
    // await library.sideLoad(pathZip, config.rokuUser, config.rokuPass);
  });

  it("should launch the channel", async function () {
    this.timeout(15000);
    await library.verifyIsChannelLoaded("dev");
  });

  menuMap.forEach((el) => {
    it(`Option ${el.expected} should be showed`, async function () {
      this.timeout(30000);
      const res = await library.verifyIsScreenLoaded(
        {
          elementData: [{ using: el.attr, value: el.expected }],
        },
        4,
        20
      );
      expect(res).to.equal(true);
    });
  });

  after(async () => {
    await library.sendKey("home", 4);
    await library.close();
    //childProcess.kill();
  });
});
