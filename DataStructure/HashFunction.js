/**
 * @param key: A String you should hash
 * @param HASH_SIZE: An integer
 * @return an integer
 */
// This will not work since 33^23 exceeds the
// Number.MAX_SAFE_INTEGER

// var hashCode_v1 = function(key, HASH_SIZE) {
//   var l = key.length;
//   var sum = 0;
//   for(var i = 0; i < l; i++) {
//     sum += key.charCodeAt(i) * Math.pow(33, l - 1 - i);
//     console.log(i, sum)
//   }
//   return sum % HASH_SIZE;
// };

var hashCode_v2 = function(key, HASH_SIZE) {
  var sum = 0;
  for(var i = 0; i < key.length; i++) {
    sum = (sum * 33 + key.charCodeAt(i)) % HASH_SIZE;
  }
  return sum;
}; 

// var key = 'abcd';
// console.log(hashCode_v1(key, 100)); //78
// console.log(hashCode_v2(key, 100)); //78

var key = "abcdefghijklmnopqrstuvwxyz";
// console.log(hashCode_v1(key, 2607)); //not 1673
console.log(hashCode_v2(key, 2607)); //1673