/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  // O(n)
  input = input.split('\n');
  // pathLength to a file
  // [ 'dir', '/subdir1', '/file1.ext']
  // [3, 11, 21]
  var path = []; 
  var maxLength = 0;
  for(var i = 0; i < input.length; i++) {
    var str = input[i];
    // O(str.length)
    var match = str.match(/\t/g);
    if(match === null) {
      var count = 0;
      path[count] = str.length;
    } else {
      var count = match.length;
      path[count] = str.substring(count).length + path[count - 1] + 1;
    }
    // O(str.length)
    if(str.substring(count).indexOf('.') !== -1) {
      if(path[count] > maxLength) {
        maxLength = path[count];
      }
    }
  }
  return maxLength;
};

var input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
console.log(lengthLongestPath(input)); // 32

var input = "a\n\taa\n\t\taaa\n\t\t\tfile1.txt\naaaaaaaaaaaaaaaaaaaaa\n\tsth.png";
console.log(lengthLongestPath(input)); // 29

var input = 'a.txt';
console.log(lengthLongestPath(input)); // 5