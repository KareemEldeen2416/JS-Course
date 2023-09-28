//----Output to screen----//

// window.alert("This messages is for you");
// document.write("<h1>Created element by JS</h1>");




//----Console methods, styling, and webAPI----//

// console.log("Log");
// console.error("Error");
// console.table([ "Hamada" , "Semem"  ,"Zero" ]);
// console.log("Normal %cmessage" , "color:blue;");




//----ECMAScript----//




//----Variables declaration----//

// var user = "KareemEldeen";
// console.log(user);
// hello.innerHTML = "Modified variable";


// console.log("Ibda 'Academy'");
// console.log('Ibda "Academy"');
// console.log("Ibda \"Academy\"");




//----Concatenation----//

// let a = "I";
// let b = "am";
// let c = "comming";
// console.log(`${a} ${b} ${c} in about ${3*5} minutes`);
// console.log(2 ** 4);
// console.log ( 2*2*2*2);
// console.log(+100);
// console.log(+"100");
// console.log(-100);
// console.log(-"-100");



//----Syntactic Sugar and Numbers----//

/*
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(Number.MAX_SAFE-INTEGER);
console.log(Number.MAX_VALUE);
console.log((100).toString());
console.log(100..toString());
console.log(100.53434.toFixed(2));
console.log(parseInt("100"));
console.log(parseFloat("100.35"));
console.log(Number.isInteger("kareem"));
console.log(Number.isInteger(100));
console.log(Number.isNaN("100 / osama"));
*/





//----Math Object----//

/* 
console.log(Math.round(99.2));
console.log(Math.round(99.5));
console.log(Math.ceil(99.2));
console.log(Math.ceil(99.9));
console.log(Math.ceil(99.9));
console.log(Math.min(3 ,5 ,1 ,51));
console.log(Math.max(1,5,2,63));
console.log(Math.pow(2,4));
console.log(Math.random());
console.log(Math.trunck(99.5364));
*/





//----String Methods----//


/* 
let theName = "KareemEldeen";
console.log(theName[1]);
console.log(theName.charAt(1));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log(theName.trim().charAt(2).toUpperCase());
console.log(theName.indexOf("Eldeen" , 8));
console.log(theName.lastIndexOf("e"));
console.log(theName.slice(2 , 6));
console.log(theName.slice(-6));
console.log(theName.repeat(4));
console.log(theName.split());
console.log(theName.split(" "));
console.log(theName.split("" , 4));
console.log(theName.substring(3,5));
console.log(theName.substr(0,6));
console.log(theName.substr(8));
console.log(theName.substr(-4));
console.log(theName.substr(-5,3));
console.log(theName.includes("Ka"));
console.log(theName.includes("Ka" , 5));
console.log(theName.startsWith("El", 3));
console.log(theName.endsWith("o"));
console.log(theName.endsWith("k" , 8));
*/



//----Comparison operators----//

/*
== equal
!= not equal
=== identical
!== not identical
>=
<=
>
<
*/ 


//----Logical operators----//

/*
! Not
&& And
|| Or
*/



//----Conditional ternary operator----//

/*
let gender = "male";
gender === "male"? console.log("Mr") : console.log("Mrs");
let result = gender === "male"? "MR" : "MRS";
document.write(result); 
document.write(`Hello ${result} Wanka`);
*/


//----Nullish Coalescing Operator----//


/*
let price = false;
console.log(`Price is ${price || 300}`);
console.log(`The price is ${price ?? 200}`); // return falsy values only
*/




//----Switch statement----//

/*
let day = 3 ; 

switch(day){
    case 0 : console.log("Saturday");
    break;

    case 1 : console.log("Sunday");
    break;

    case 2 : console.log("Monday");
    break;

    case 3 :
    case 4 : console.log("Tuseday");
    break;

    default: console.log("Not a week day!");
    break;
}
*/




//----Array----//

/*
let myFriends = ["Ahmed" , "Salah" , "Omar"];
document.write(`Hello ${myFriends[0]} ${myFriends[1][0]}`);
console.log(Array.isArray(myFriends));
console.log(myFriends.length);
myFriends[6] = "Hamada";
console.log(myFriends);
console.log(myFriends.length);
*/



//----Add, and remove from array----//

/*
let myFriends = ["Ahmed" , "Salah" , "Omar"];
myFriends.unshift("Osama" , "Saif");
console.log(myFriends);
myFriends.push("Suzume" , "Mitsuha");
console.log(myFriends);
myFriends.shift();
console.log(myFriends);
myFriends.pop();
console.log(myFriends);
let lastElement = myFriends.pop();
console.log(lastElement);
let firstElement = myFriends.shift();
console.log(firstElement);
*/


//----Searching Array----//

/*
let myFriends = ["Ahmed" , "Salah" , "Omar"];
console.log(myFriends.indexOf("Salah"));
console.log(myFriends.indexOf("Salah" , 2));
console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed" , -2));
console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed",1));
*/



//----Sorting Array----//

/*
let myFriends = ["Ahmed" , "Salah" , "Omar"];
console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());
*/



//----Slicing Array----//


/*
let myFriends = ["Ahmed" , "Salah" , "Omar" , "Hamada" , "Suzume" , "Mitsuha"];
console.log(myFriends.slice(1));
console.log(myFriends.slice(1,4));
console.log(myFriends.slice(-3));
console.log(myFriends);
myFriends.splice(2, 0 , "Taki Kun" , "Mori san")
console.log(myFriends);
*/


//----Joining Arrays----//


/*
let letters = ["A" , "B" , "c"];
let words = ["Apple" , "Ball" , "Cat"];
let phrases = ["I had a day in the sun" , "Piece of cake"];

let Combination = letters.concat(words , phrases);
console.log(Combination , "Jameel");
console.log(words.join());
console.log(words.join(" @ "));
*/








//----For loop----//

/*
mainLoop: for(let i = 1 ; i <=10 ; i++){
    console.log(`Main Loop ${i}`);
    nestedLoop:for(let k = 1  ; k <= 5 ; k++){
        console.log(`Nested Loop ${i * k}`);
        if(i === 5){
            break mainLoop;
        }
    }
}
*/



//----While Loop----//

/*
let index = 0 ; 
while(index < 10){
console.log(index + 1);
index++;
}
*/





//----Do-while Loop----//

/*
let index =  0 ;
do{
console.log(index + 1 );
index++;
}while(index < 12);
*/





//----Function Intro----//


/*
function sayHello (userName){
    console.log(`Welcome ${userName} to our new world`);
}
sayHello("Karamela");

function add(num1 , num2){
    return num1 + num2;
}
console.log(add(2,4));
*/













//----Function default parameters----//



/*
function sayHello(name , age){
    age = age || "Unknown";
    return `Hello ${name}, Your age is ${age}`;
}

console.log(sayHello("Suzume"));
console.log(sayHello("Mitsuha" , 20));
*/

/*
function sayHello(name = "Unknown" , age = "Unknown"){
    return `Hello ${name}, Your name is ${age}`;
}

console.log(sayHello("Taki kun"));
console.log(sayHello("Edogawa" , 9));
console.log(sayHello());
*/









