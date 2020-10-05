const rokuLibrary = require('../../../../submodules/roku-automation/jsLibrary/library/rokuLibrary');
const expect = require('chai').expect;
const path = require('path');

const config = require('../../../../config');

let library;

describe('Test account page', () => {
  before(async function () {
    library = new rokuLibrary.Library(config.rokuIp);
    //await library.launchTheChannel("dev");
  });

  it('should launch the channel', async function () {
    this.timeout(15000);
    await library.verifyIsChannelLoaded('dev');
  });

  it(`Should render account sceen`, async function () {
    this.timeout(20000);

    await library.sendKeys([
      'down',
      'down',
      'down',
      'down',
      'down',
      'down',
      'select',
    ]);

    this.timeout(20000);
    const res = await library.verifyIsScreenLoaded(
      {
        elementData: [{ using: 'text', value: 'Membership' }],
      },
      2,
      4
    );
    expect(res).to.equal(true);
  });

  after(async () => {
    //await library.sendKey("home", 4);
    await library.close();
  });
});
