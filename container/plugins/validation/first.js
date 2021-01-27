function validator(doc) {
  console.log('in name validator');

  return new Promise((resolve, reject) => {
    if ('name' in doc && doc['name'].length > 0) {
      resolve(doc);
    } else {
      reject(new Error('No name on the doc!'));
    }
  });
}

module.exports = validator;
