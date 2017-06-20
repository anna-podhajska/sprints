// Eloquent JavaScript, ch3:
// ex1 MINIMUM

var min = function (x, y) {

  if (x < y) {
    return x;
  }else{
    return y;}
}

console.log(min(0, 10));
console.log(min(0, -10));


// ex2 RECURSIVE FUNCTION
function isEven(N) {
 if (N === 0) {
   return true;
	}
	else if (N === 1) {
      return false;
    }
  else if (N > 0) {
    return isEven(N-2);}
 else {
   return isEven (N+2);
 }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → FALSE


//ex3 count Bs

f// Your code here.
function countChar(str, letter) {
  var LetterCount = 0;
  for (var i=0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      LetterCount += 1;
    }
  }
 return LetterCount;
}

function countBs(str) {
  var countB = countChar(str, "B");
  return countB;
  //this is same as:  return countChar(str, "B");
}

  
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
