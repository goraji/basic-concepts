let async = require('async');
let arr = [1, 2, 3, 4];
async.eachSeries(
  arr,
  (item, callback) => {
    if (item) {
      console.log(item);
      callback();
    } else {
      console.log('in error');
    }
  },
  (error) => {
    if (error) {
      console.log('error');
    } else {
      console.log('no error');
    }
  }
);
