function enrichment(doc) {
  console.log('in address enrichment plugin');

  return new Promise((resolve, reject) => {
    if (doc.name == 'Bob') {
      doc.address = '123 Fake Street';
      resolve(doc);
    } else {
      reject(new Error('It was not "Bob"'));
    }
  });
}

module.exports = enrichment;
