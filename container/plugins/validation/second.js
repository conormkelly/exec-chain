function validator(doc) {
  console.log('in age validator');

  return new Promise((resolve, reject) => {
    if ('age' in doc && Number.isInteger(doc.age)) {
      resolve(doc);
    } else {
      reject(new Error('Age is required and must be a number!'));
    }
  });
}

module.exports = validator;
