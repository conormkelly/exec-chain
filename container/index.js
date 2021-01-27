const requireAll = require('require-all');
const Bottle = require('bottlejs');

// Load all the plugin module files
const plugins = requireAll(__dirname + '/plugins');

// Create a container to store refs to the plugins
const bottle = new Bottle();

// Add the plugins to the container
for (let category of Object.keys(plugins)) {
  for (let plugin of Object.keys(plugins[category])) {
    bottle.constant(`${category}.${plugin}`, plugins[category][plugin]);
  }
}

// Allow plugins to be looked up via string dot notation i.e. "category.key"
bottle.getFunction = function (str) {
  const keys = str.split('.');
  return bottle.container[keys[0]][keys[1]];
};

module.exports = bottle;
