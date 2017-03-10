/** 
 *@param chars: The letter array you should sort by Case
 *@return: void
 */
var sortLetters = function(string) {
  var stringArray = string.split('');
  var i = 0, stored = 0;
  while(i < stringArray.length) {
    if(stringArray[i] === stringArray[i].toLowerCase()) {
      var temp = stringArray[i];
      stringArray[i] = stringArray[stored];
      stringArray[stored] = temp;
      stored++;

    }
    i++;
  }
  return stringArray.join('');
}; 

console.log(sortLetters('abAcD'));