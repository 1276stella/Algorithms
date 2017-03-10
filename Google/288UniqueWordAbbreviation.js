/**
 * @param {string[]} dictionary
 */ 
var ValidWordAbbr = function(dictionary) {
  this.dictionary = {};
  this.abbrDictionary = {};
  for(var i = 0; i < dictionary.length; i++) {
    var abbrWord = getAbbr(dictionary[i]);
    if(!(abbrWord in this.abbrDictionary)) {
      this.abbrDictionary[abbrWord] = 1;
    } else {
      if(!(dictionary[i] in this.dictionary)) {
        this.abbrDictionary[abbrWord]++;
      }
    }
    this.dictionary[dictionary[i]] = true;

  }
};

var getAbbr = function(word) {
  var l = word.length;
  if(l <= 2) {
    return word;
  }
  return word.charAt(0) + (l - 2) + word.charAt(l - 1);
};
/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  var abbrWord = getAbbr(word);
  return this.dictionary[word] && this.abbrDictionary[abbrWord] === 1 ||
  !this.dictionary[word] && !this.abbrDictionary[abbrWord];
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */

 var dictionary = [ "a", "a" ];
 var abbrWord = new ValidWordAbbr(dictionary);
 console.log(abbrWord.isUnique("a")); // true