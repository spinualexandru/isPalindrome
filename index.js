//Name: Spinu Alexandru-Mihai
//Email: okeidev@gmail.com
function isPalindrome(s,i) {
 return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}
