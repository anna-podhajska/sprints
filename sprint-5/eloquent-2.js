
// _______LOOPING A TRIANGLE ________

//OPTION 1
function triangle() {
  var hash = "#";
  	for (i = 0; i <=7; i++) {
        console.log(hash);
        hash += "#";
    }
};
triangle();


//OPTION 2
function triangle() {
	for (var hash = "#"; hash.length <=7; hash+="#") {
      console.log(hash);
    }
}
triangle();


//OPTION 3
function triangle() {
  var hash = "#"
  	while (hash.length <=7) {
        console.log(hash);
        hash+="#";
      }
}
triangle();

/*______________FizzBuzz_____________________________

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.*/

function FB() {

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
  	}
  }
};

FB();


/*When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)*/

// _______OPTION 1

function FB() {
  for (var i = 1; i <= 100; i++) {

    if (i % 3 ===0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
  	}
  }
};

FB();


//_______________CHESS _______________

//_______________________OPTION 1:
function chess() {
  var string1 = " #";
  var string2 = "# ";

  for (i = 1; i<=8; i++) {
    console.log(string1.repeat(4));
    console.log(string2.repeat(4));
    i+=1;
  }
}
chess();

//____after re-thinking ...______OPTION 2:
function chess(noRows, noCols) {
  var string1 = " #";
  var string2 = "# ";

  for (i = 1; i<=noRows; i+=2) {
    console.log(string1.repeat(noCols));
    console.log(string2.repeat(noCols));
  }
}
chess(8, 4);
