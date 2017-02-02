//Name: Spinu Alexandru-Mihai
//Email: okeidev@gmail.com
String.prototype.isPalindrome = ()=>{
  return this.replace(/[^a-zA-Z ]/g, "").replace(/ /g,'').trim().toLowerCase() == this.replace(/[^a-zA-Z ]/g, "").replace(/ /g,'').trim().toLowerCase().split('').reverse().join('');
}
