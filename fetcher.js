const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
// console.log(args);
// //http request

const fetcher = (URL, filePath) => {
  request(URL, (error, response, body) => {
    console.log('error', error);
    console.log('statusCode', response && response.statusCode);
    console.log('body', body);

    fs.writeFile(filePath, body, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};

fetcher(args[0], args[1]);