const bottle = require('../container');

async function executeChain(pluginNames, jsonData) {
  // Look up the actual functions by plugin name
  const handlers = pluginNames.map((name) => bottle.getFunction(name));

  let result = await handlers[0](jsonData);

  for (let i = 1; i < handlers.length; i++) {
    const nextHandler = handlers[i];
    result = await nextHandler(result);
  }
  return result;
}

module.exports = { executeChain };
