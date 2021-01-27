const { executeChain } = require('./execution');

async function main() {
  const jsonData = { name: 'Bob', age: 30 };

  console.log('Input data:', jsonData);

  const pluginNames = [
    'validation.first',
    'validation.second',
    'enrichment.address',
  ];

  const result = await executeChain(pluginNames, jsonData);

  console.log('Output data:', result);
}

main();
