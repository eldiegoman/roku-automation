// TO DO

const shouldApprRendered = async (library, needInitialHook) => {
  while (needInitialHook) {
    const element = await library.getFocusedElement();
    const { XMLName: xmlName } = element;
    const { Local: localNodeName } = xmlName;

    if (localNodeName === 'screen' || localNodeName === 'MainScene') {
      needInitialHook = false;
    } else {
      needInitialHook = false;
    }

    console.log('Loading Channel...');

    return needInitialHook;
  }
};

exports.shouldApprRendered = shouldApprRendered;
