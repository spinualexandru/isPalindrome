//Name: Alexandru-Mihai Spinu
//Email: okeidev@gmail.com
String.prototype.isPalindrome = function(){
  return this.replace(/[^a-zA-Z ]/g, "").replace(/ /g,'').trim().toLowerCase() == this.replace(/[^a-zA-Z ]/g, "").replace(/ /g,'').trim().toLowerCase().split('').reverse().join('');
}
