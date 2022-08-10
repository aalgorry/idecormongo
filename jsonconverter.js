const fs = require('fs');

const content = 'Some content!';

try {
  fs.writeFileSync('test.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}