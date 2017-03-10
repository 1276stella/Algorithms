/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
//   var stack = [], i = 0;
//   while(i < s.length) {
//     var c = s.charAt(i);
//     if(c === ']') {
//       // if c is ']' 
//       var top = stack.pop();
//       var tempStr = '';
//       while(top !== '[') {
//         tempStr = top + tempStr;
//         top = stack.pop();
//       }
//       var num = stack.pop();
//       var array = [];
//       for(var j = 1; j <= num; j++) {
//         array.push(tempStr);
//       }
//       stack.push(array.join(''));
//       i++;
//     } else if(!isNaN(c)) {
//       // if c is a digit
//       var num = '';
//       while(!isNaN(s.charAt(i))) {
//         num += s.charAt(i);
//         i++;
//       }
//       stack.push(+num);
//     } else {     
//       stack.push(c);
//       i++;
//     }
//   }
//   return stack.join('');  
// };

var decodeString = function(s) {
  var intStack = [], chStack = [], k = 0, curtStr = '';
  for(var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if(!isNaN(c)) {
    console.log(k, c)
      k = 10 * k + (c - '0');
    console.log(k)

    } else if(c === '[') {
      chStack.push(curtStr);
      curtStr = '';
      intStack.push(k);
      k = 0;
    } else if(c === ']') {
      var temp = curtStr;
      curtStr = chStack.pop();
      for(var k = intStack.pop(); k > 0; k--) {
        curtStr += temp;
      }
    } else {
      curtStr += c;
    }
    // console.log(c)
    // console.log(curtStr)

  }
  return curtStr;
};

var s = "3[a]2[bc]";
console.log(decodeString(s)); //return "aaabcbc".
s = "3[a2[c]]";
console.log(decodeString(s)); //return "accaccacc".
s = "2[abc]3[cd]ef";
console.log(decodeString(s)); //return "abcabccdcdcdef".
s = "10[a]";
console.log(decodeString(s)); //return "aaaaaaaaaa".