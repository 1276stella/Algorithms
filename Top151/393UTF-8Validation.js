/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  if(data.length === 0) {
    return false;
  }
  var i = 0, k;
  while(i < data.length) {
    if(k === 0 || i === 0) {
      k = findType(data[i]);
      if(k === 0) {
        return false;
      }
    } else {
      if(!isValid(data[i])) {
        return false;
      }
    }
    k--;
    i++;
  }
  return k === 0;
};

var findType = function(num) {
  if((num & 0xF8) === 0xF0) {
    return 4;
  } else if((num & 0xF0) === 0xE0) {
    return 3;
  } else if((num & 0xE0) === 0xC0) {
    return 2;
  } else if((num & 0x80) === 0x00) {
    return 1;
  }
  return 0;
};
var isValid = function(num) {
  if((num & 0x80) === 0x80) {
    return true;
  }
  return false;
};
var data = [197, 130, 1];
console.log(validUtf8(data));

var data = [235, 140, 4];
console.log(validUtf8(data));

var data = [237];
console.log(validUtf8(data));
