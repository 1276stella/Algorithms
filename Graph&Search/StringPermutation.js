var stringPermutation = function(s1, s2) {
  return s1.split('').sort().join() === s2.split('').sort().join();
};

console.log(stringPermutation('abcd', 'bcad')); // true
console.log(stringPermutation('abbe', 'abe')); // false
