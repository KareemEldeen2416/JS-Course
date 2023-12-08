//----Output to screen----//

// window.alert("This messages is for you");
// document.write("<h1>Created element by JS</h1>");




//----Console methods, styling, and webAPI----//

// console.log("Log");
// console.error("Error");
//console.table([ "Hamada" , "Semem"  ,"Zero" ]);
// console.log("Normal %cmessage" , "color:blue;");

// console.group("Parent1");
// console.log("Message 1");
// console.log("Message 2");
// console.group("Child1");
// console.log("Message 1");
// console.log("Message 2");
// console.group("Grand child1");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Parent2");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();

















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

// let num = 3;
// console.log(num + num);
// console.log(true +true + true+ num);
// console.log(+`${num + num}`);
// console.log(+"3" + num);
// console.log(+(num.toString())+ +(num.toString()));
// console.log(Number.isInteger(num) + Number.isInteger(num) + true + num);






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


// let myFriends = ["Ahmed" , "Salah" , "Omar"];
// myFriends.unshift("Osama" , "Saif");
// console.log(myFriends);
// myFriends.push("Suzume" , "Mitsuha");
// console.log(myFriends);
// myFriends.shift();
// console.log(myFriends);
// myFriends.pop();
// console.log(myFriends);
// let lastElement = myFriends.pop();
// console.log(lastElement);
// let firstElement = myFriends.shift();
// console.log(firstElement);



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





//----Rest parameters----//


/*
function calc(...numbers){
    console.log(Array.isArray(numbers));
    for(let i = 0 ; i < numbers.length ; i++){
        console.log(numbers[i]);
    }
}

console.log(calc(1,3,4,5));
*/






//----Anonymous Function----//


/*
let calculator = function(num1 , num2){
    return num1 + num2; 
}
console.log(calculator(1,2));

setTimeout(() =>{
    console.log("Good");
},2000);
*/


//----challenge----//

/*
console.log("New Challenge");

function Message (arg1 , arg2  , arg3){
    
    let name = (typeof arg1 === "string")? arg1 : (typeof arg2 === "string")? arg2 : arg3;
    let age = (typeof arg1 === "number")? arg1 : (typeof arg2 === "number")? arg2 : arg3;
    let bool = (typeof arg1 === "boolean")? arg1 : (typeof arg2 === "boolean")? arg2 : arg3;
    console.log(`Your name is ${name}, and your age is ${age}. ${(bool === true)? "you are with us" : "you're not with us"}`);

}

Message("Kareem" , 23 , false);
Message(true , "Osama" , 12);
Message(10 , true , "Saif");
Message(20, "Mohammed" , false);
Message(true , 13 , "Taki");
Message("Conan" , true , 9);
*/






//----Return Nested function----//


//Example 1
/*
function sayHello(firstName , lastName){
    let Message = "Hello";
    function concatenate(){
        Message = `${Message} ${firstName} ${lastName}`;
        
    }

    concatenate();
    return Message;
}
console.log(sayHello("Kareem" , "Ahmed"));
*/


//Example 2
/*
function sayHello(firstName , lastName){
    let Message = "Hello";
    function concatenate(){
        return `${Message} ${firstName} ${lastName}`;
    }
    return concatenate();
}
console.log(sayHello("Kareem" , "Karamela"));
*/







//----Arrow Function----//

/*
let result = ()=>{
    return 40;
}
console.log(result());

let print = (num)=>num;
console.log(print());
*/



//----Higher order function----//



/*
let myNums = [1,2,3,4,5];

****First way****

let addSelf = myNums.map(function(element , index, arr){
  console.log(`Current Element ${element}`);
  console.log(`Current Index ${index}`);
  console.log(`Array ${arr}`);
  return element + element;
},10);


****Second way****

let addSelf = myNums.map  ( (element)=>element +element );
console.log(addSelf);

****Third way****

function addition (ele){
    return ele + ele;
}
let addSelf = myNums.map(addition);
console.log(addSelf);
*/






//----Higher order function - Filter ----//


/*
let friends = ["Osama" , "Kamal" , "Kamel" , "Kun" , "Zero"];
let numbers = [1,2,3,4];
let filteredFriends = friends.filter(function(element){
    return element.startsWith("K");
});
let evenNumbers = numbers.filter(function(el){
    return el % 2 === 0 ;
});
console.log(filteredFriends);
console.log(evenNumbers);
*/


//----Higher order function - Reduce ----//



// let nums = [10,20,30,40];
// let reducedArray = nums.reduce(function(acc,currentElement , index, arr){
//      console.log(`Accumulator is ${acc}`);
//      console.log(`Current Element is ${currentElement}`);
//      console.log(`Index is ${index}`);
//      console.log(`Arrays is ${arr}`);
//     return acc + currentElement;
// } , 5);

// console.log("$$$$$$$$$$$$$$$$$$$$");
// console.log(reducedArray);


//----For each----//



/*
let allList = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allList.forEach(function(ele){


    ele.onclick = function () {

      console.log(this);
      console.log("###################");
      console.log(ele.innerHTML);
      allList.forEach( function(element){
        element.classList.remove("active");
      });
      this.classList.add("active");

      //Hide all divs
      allDivs.forEach(function (ele){
        ele.style.display = "none";
      });
      

    };

});
*/




//----Object Introduction----//


/*
let myVar = "nationality";
let user = {
    // properties
    nationality : "Russian",
    theName : "Kareem",
    theAge: 23,
    "id of" : "#987",
    // Methods
    sayHello: function(){
        console.log(`Hello`);
    }
};
console.log(user.theName);
console.log(user.theAge);
console.log(user["id of"]);
console.log(user.nationality);
console.log(user[myVar]);
*/






//----Nested Object----//


/*
let user = {
name : "Karamela",
age: 30,
skills: ["HTML" , "CSS" , "JavaScript"],
available: true,
addresses: {
    ksa: "Riyadh",
    egypt: {
        one : "Cairo",
        two: "Luxor",
    }
},
checkAv : function(value){
     return value === true ? true : false;
}
}

console.log(user.addresses.egypt.one);
console.log(user.addresses.ksa);
console.log(user.checkAv(user.available));
console.log(user.skills[0]);
console.log(user.addresses);
*/





//----Create object with new keyword----//


/*
let user = new Object({
    age : 20,
});
console.log(user);
user.age = 12;
user["country"]= "Sham";
user.sayHello = function(){
    console.log(`Hello`);
}
console.log(user);
*/



//----this keyword----//


/*
console.log(this);
console.log(this === window);
myVar = 100;
console.log(window.myVar);
console.log(this.myVar);
function sayHello(){
    console.log(this);
}
sayHello();
*/




//----Create object with create method----//


/*
let user = {
    age: 40 , 
    doubleAge: function(){
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});
obj.val = 100 ;
console.log(obj);
console.log(obj.val);


let copyObj = Object.create(user);

copyObj.age = 30;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
*/






//----Create object with assign method----//


/*
let o1 = {
    prop1 : 11,
    meth1 : function() {
        return this.prop1;
    },
};

let o2 = {
    prop2 : 2,
    meth2 : function() {
        return this.prop2;
    },
};

let targetObject = {
    prop1 : 13,
    prop3 : 3,
};


let finalObject = Object.assign(targetObject, o1 , o2);
console.log(finalObject);
finalObject.prop1 = 30;
console.log(finalObject);

let newObject = Object.assign({} , o1 , {prop5 : 5} );
console.log(newObject);
*/
// The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
  
  // Code One => How To Get Object Length ?
//   let objectLength = 5;
  
//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ???????`);
//     console.log(`The Publisher Is ???????`);
//     console.log(`The Price Is ???????`);
  
//     // Check If Nested Object Has Property (bestThree)
//     if (???????) {
//       console.log("- Game Has Releases");
//       console.log(`First => ???????`);
//       console.log(`Second => ???????`);
//       console.log(`Third => ???????`);
//     }
//     console.log("#".repeat(20));
//   }









//----DOM, and select elements----//


/*
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);
let myTagElement = document.getElementsByTagName("li");
console.log(myTagElement);
myTagElement[0].innerHTML = "Edited element by JavaScript";
let myClassElement = document.getElementsByClassName("active");
let myElement = document.querySelector("div");
console.log(myElement);
myElement.innerHTML = "My div";
let myElements = document.querySelectorAll("div");
console.log(myElements[0]);

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.images);
console.log(document.links);
*/

// let myInput = document.querySelector("[name = 'dollar']");
// let myOutput = document.querySelector(".result");
// const dollarValue = 15.6;
// myInput.onclick = ()=>{
//     let inputValue = myInput.value;
//     let conversion = dollarValue * inputValue;
//     myOutput.innerHTML = `{${inputValue}} USD Dollar = {${conversion}} EGP`;
// };



//----Get Set elements content and attributes----//


/*
let myElement = document.querySelector("div");
console.log(myElement.innerHTML);
console.log(myElement.textContent);
myElement.innerHTML = "Text from <h3>JS</h3> file";
myElement.textContent = "This is added text";

document.images[0].alt = "Picture";
document.images[0].title = "Picture Title";
document.images[0].className = "active";
document.links[0].href = "https://www.google.com";

console.log(document.links[0].getAttribute("class"));
document.links[0].setAttribute("class" , "kemo");
*/




//----Check Attributes----//


/*
console.log(document.getElementsByTagName("div")[0].attributes);
let myDiv = document.getElementsByTagName("div")[0];
if(myDiv.hasAttribute("class")){
    console.log(true);
    if(myDiv.getAttribute("class") === ""){
        myDiv.removeAttribute("class");
    }else{
        myDiv.setAttribute("class" , "newClass");
    }
}else{
    console.log(false);
}
console.log(myDiv.hasAttributes());
*/







//----Create, and append child----//


/*
let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is a comment");
myElement.className = "active";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test" , "hamada");
myElement.appendChild(myText);
myElement.appendChild(myComment);
document.body.appendChild(myElement);
console.log(myElement);
*/







//----Deal with children----//


/*
let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.firstChild);
console.log(myElement.lastChild);
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);
*/





//----DOM Events----//

/*
let myElement = document.querySelector("Button");
let myForm = document.querySelector("form");
let textBox = document.getElementById("name");
myElement.onclick = function(){
    console.log("Hello From JS File");
};
myElement.oncontextmenu = function(){console.log("Context Event")};
myElement.onmouseenter = function(){console.log("Mouse Event")};
myElement.onmouseleave = function(){console.log("Mouse Leave")};
myElement.onload = function(){console.log("Load Event")};
window.onscroll = function(){console.log("Scroll Event")};
window.onresize = function(){console.log("Resize Event")};
textBox.onfocus = function(){console.log("Focus Event")};
myForm.onsubmit = function(){console.log("Submit Event")};
*/

// let myCurrent = document.querySelector("[title = 'current']");
// let addInput = document.getElementsByClassName("classes-to-add")[0];
// console.log(addInput);
// let removeInput = document.getElementsByClassName("classes-to-remove")[0];
// console.log(removeInput);
// let myClassList = document.querySelector(".classes-list div");
// console.log(myClassList);
// addInput.onblur = ()=>{
//     let classList = addInput.value;
// };



//----Validate form, and prevent default----//



/*
let userName = document.querySelector("[name = 'username']");
let age = document.querySelector("[name = 'age']");


document.forms[0].onsubmit = function(event){
    let userValid = false;
    let ageValid = false;

    console.log(userName.value);
    console.log(userName.value.length);

    if(userName.value !== "" && userName.value.length<10){
        console.log("Valid");
        userValid = true; 
    }

    if(age.value !== ""){
        ageValid = true;
    }

    if(userValid === false || ageValid === false){
        event.preventDefault();
    }
    
};
document.links[0].onclick = function(event){
    console.log(event);
    event.preventDefault();
};
*/




//----Event simulation - Click focus blur----//


/*
let ageField = document.querySelector("[name = 'age']");
let userName = document.querySelector("[name = 'username']");
window.onload = function(){
    ageField.focus();
};

userName.onblur = function(){
    document.links[0].click();
};
*/




//----Class list object, and methods----//


/*
let myElement = document.querySelector("[name = 'username']");
console.log(myElement.classList);
console.log(myElement.classList.length);
console.log(myElement.classList.contains("one"));
console.log(myElement.classList.item(1));
myElement.classList.add("active");
myElement.classList.remove("one");
console.log(myElement.classList);
myElement.classList.toggle("one");
console.log(myElement.classList);
*/




//----CSS styling, and stylesheets----//

/*
let element = document.getElementById("my-div");
element.style.color = "blue";
element.style.cssText = "font-weight : bold; color : green; font-size : 20pt;";
element.style.removeProperty("color");
element.style.setProperty("background-color" , "blue");
element.style.setProperty("color" , "white");

console.log(document.styleSheets[0].cssRules[0].style.setProperty("background-color" , "white"));
console.log(document.styleSheets[0].cssRules[0].style.removeProperty("color"));
*/





//----Before, After, Prepend, Append, Remove----//

/*
let element = document.getElementById("my-div");
let createdP = document.createElement("p");
createdP.innerHTML = "Paragraph";
createdP.style.backgroundColor = "red";
element.before("Hello From JS");
element.before(createdP);
element.after("Barcelona");
element.after(createdP);
element.prepend("SAKA");
element.prepend(createdP);
element.append("Aresenal");
element.append(createdP);
element.remove();
*/








//----DOM Traversing----//


/*
let span = document.querySelector(".two");
console.log(span);
console.log(span.nextSibling);
console.log(span.nextElementSibling);
console.log(span.previousSibling);
console.log(span.previousElementSibling);
console.log(span.parentElement);
span.onclick = function(){
    span.parentElement.style.backgroundColor = "blue";
    span.parentElement.style.color = "white";
};
*/




//----Cloning----//

/*
let myDiv = document.querySelector("#my-div");
let myItem = document.querySelector(".active").cloneNode(true);
myDiv.appendChild(myItem);
*/





//----Add event listener----//



/*
let myButton = document.querySelector("[type = 'submit'");
console.log(myButton);
myButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("A click from an event listener");
});

function printer (){
    console.log("A click from a function added to event listener");
}
myButton.addEventListener("click" , printer);
myButton.addEventListener("click" , function(){
    let myDiv = document.querySelector("#my-div");
    let newDiv = myDiv.cloneNode(true);
    newDiv.addEventListener("click" , function(){
        console.log("I am a cloned division");
    });
    document.body.appendChild(newDiv);
});
*/

// let myElements = document.body.querySelectorAll("div,span,p,article,section");
// console.log(myElements.length);
// for(let i =0 ; i <myElements.length;i++){
//     myElements[i].onclick = (e)=>{
//         console.log(`This is ${e.target.tagName.toLowerCase()}`);
//     };
// }






//----What is BOM----//

/*
window.console.log("from window object");
window.document.title = "JS-Course";
*/




//Alert, Confirm, Prompt----//


/*
window.alert("Wonderful message");
console.log("Test");
let confirmMessage = window.confirm("Do you confirm it?");
if(confirmMessage){
    console.log("Item deleted");
}else{
    console.log("Item not deleted");
}

let promptMessage = window.prompt("Is it suitable?" , "Default message");
console.log(promptMessage);
*/




//----setTimeout, and clearTimeout----//



/*
let counter = setTimeout(function(){
    console.log("Printed message after 3 seconds");
},3000);
console.log(counter);

function printMessage (name , age){
    console.log(`A message from ${name}, his age is ${age}`);
}

setTimeout(printMessage, 3000 , "Kareem" , 13);

let btn = document.querySelector("[type = 'submit']");
console.log(btn);
btn.addEventListener("click" , function(event){
    event.preventDefault();
    clearTimeout(counter);
});
*/





//----setInterval, and clearInterval----//


/*
let element = document.querySelector(".active");
let count = 1;
console.log(element);
let counter = setInterval(function(){
    element.innerHTML = `${count}`;
    count++;
    if(count === 11){
        clearInterval(counter);
    }
},1000);
*/







//----Window location object----//


/*
console.log(window.location);
 console.log(window.location.href);
// window.location.href = "https://google.com";
//watch again first 4 mins.
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.protocol);
console.log(window.location.hash);
window.location.reload();
window.location.replace("https://google.com");
window.location.assign("https://google.com");
*/







//----window open, and close----//



/*
setTimeout(function(){
    window.open("https://www.google.com","_blank","width=400,height=400,left=200,top=100");
},3000);

setTimeout(function(){
    window.close();
},2000);
*/






//----Window history object----//



/*
console.log(window.history);
console.log(history.length);
history.back();
history.go(-1);
history.forward();
*/



//----Scroll, ScrollTo, ScrollBy, Focus, Print, and Stop----//



/*
window.stop();
window.print();
let myNewWindow = window.open("https://google.com","","width=500,height=500");
myNewWindow.focus();
myNewWindow.close();
window.scrollTo(5000,5000);
window.scrollBy(30,100);
window.scrollTo({
    left:500,
    top:1500,
    behavior: "smooth"
});
*/





//----Local storage----//


/*
//SET
window.localStorage.setItem("color","red");
window.localStorage.fontWeight = "Bold";
window.localStorage["fontSize"] = "20px";

//GET
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);


//REMOVE ONE
window.localStorage.removeItem("color");


//REMOVE ALL
window.localStorage.clear();

//GET KEY
console.log(window.localStorage.key(0));

//SET COLOR IN THE PAGE
document.body.style.backgroundColor = window.localStorage.color;

console.log(typeof window.localStorage);
console.log(window.localStorage);
*/





//----Session storage----//

/*
window.localStorage.setItem("color" , "red");
window.sessionStorage.setItem("color" , "blue");
*/







//----Destructuring Arrays----//



/*
let v1 = 1 ,v2 =2 , v3 =3, v4=4;
let myFriends = ["Saif" , "Hamada" , "Taki" , "Mitsuha"];
let [a,b,c,d,e = "Suzume" ] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
[v1,v2,v3] = myFriends;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
let [w , , r , t] = myFriends;
console.log(w + " " + r + " " + t);
*/


//----Destructuring Arrays pt2----//


/*
let myFriends = ["Conan" , "Ran" , "Mori" , ["Taki" , "Mitsuha",["Suzume" , "Suzuki"]]];
let [,,,[a,,[,b]]] = myFriends;
console.log(a);
console.log(b);
*/




//----Destructuring Arrays pt3----//

/*
let book = "Video";
let video = "Book";
let stash = book;
book = video;
video = stash;
console.log(book);
console.log(video);


[book , video] = [video , book];
*/



//----Destructuring object----//


/*
const user = {
    theName : "Kareem",
    theAge : 14,
    theTitle : "Teacher",
    theCountry : "Saudi Arabia",
};


let {theName , theAge, theTitle ,theCountry} = user;
console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
*/

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// let {age : a , working: w,country:c , hobbies : [h1,,h3]} = member;



// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// console.log(`I Live in ${c}`);
// console.log(`My Hobbies: ${h1} And ${h3}`);



//----Destructuring object pt2----//



/*
const user = {
    theName : "Kareem",
    theAge : 14,
    theTitle : "Teacher",
    theCountry : "Saudi Arabia",
    skills: {
        reading: "Arabic",
        writing: "English",

    }
};

let {theName : n ,
     theAge : a ,
     theTitle : t ,
     theCountry : c ,
     theColor = "Blue",
     skills : {reading ,writing}
    } = user;
console.log(a,n ,t,c);
console.log(theColor);
console.log(reading);
console.log(writing);

const {reading: skillOne , writing: skillTwo} = user.skills;
console.log(skillOne , skillTwo); 
*/


// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };

//   let {title:t , developer:d, releases:{["Oath In Felghana"]:o,["Oath In Felghana"]:[u,j]}} = game;
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   console.log(`And I Love ${d} Games`);
//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// let chosen = 3;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// let{title: t , age: a, available: av , skills:[,two]} = myFriends[chosen-1];
// console.log(t);
// console.log(a);
// console.log(`${av?"":"Not "}Available`);
// console.log(two);



//----Destructurin Function parameters----//


/*
const user = {
    theName : "Kareem",
    theAge : 14,
    theTitle : "Teacher",
    theCountry : "Saudi Arabia",
    skills: {
        reading: "Arabic",
        writing: "English",

    }
};

showDetails(user);

function showDetails(obj){
    console.log(`Your name is${obj.theName}`);
    console.log(`Your age is${obj.theAge}`);
    console.log(`Your title is${obj.theTitle}`);

}

function showDetails({theName : n, theAge, theTitle} = user){
    console.log(`Your name is${n}`);
    console.log(`Your age is${theAge}`);
    console.log(`Your title is${theTitle}`);
}
*/





//----Set data types, and methods----//


/*
let myData = [1,1,2,2,3];
let myUniqueData = new Set([1,2,3,2,1]);
console.log(myData);
console.log(myUniqueData);
console.log(myUniqueData.size);
myUniqueData.add(4).add(4).add(7);
console.log(myUniqueData);
myUniqueData.delete(2);
console.log(myUniqueData);
console.log(myUniqueData.size);
console.log(myUniqueData.has(4));
myUniqueData.clear();
*/






//----Set vs WeakSet, and garbage collector----//

//Weakset stores objects only. 
/*
let mySet = new Set([0,1,1,2,3]);
console.log(mySet);
console.log("#".repeat(20));

let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next().value);
mySet.forEach((el)=>{
   console.log(el);
});

let myWS = new WeakSet([{A: 1}]);
console.log(typeof myWS);
console.log(myWS);
*/















//----Set datatypes, and methods----//

/*
let myData = [1,1,1,2,3];
let myUniqueData = new Set(myData);
console.log(myUniqueData);
console.log(myUniqueData.size);
console.log(myData[0]);
console.log(myUniqueData[0]);
myUniqueData.add(3).add(9).add(5);
console.log(myUniqueData);
console.log(myUniqueData.has(1));
myUniqueData.delete(2);
console.log(myUniqueData);
console.log(myUniqueData.size);
myUniqueData.clear();
myUniqueData.has(4); 
*/



//----Set Vs WeakSet, and garbage collector----//


/*
let mySet = new Set([1,1,2,3,"K",true]);
console.log(mySet);
console.log(`Size of elements in set is ${mySet.size}`);

let iterator = mySet.values();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator);

mySet.forEach((el)=>{
    console.log(el);
});


let weakSet = new WeakSet([{
    name: "Osama",
    age: 30,
    nationality: "Egypt"
}]);

console.log(typeof weakSet);
*/










//----Map datatype Vs Object----//

//Map does not have default keys
//Map Ordered by insertion
/*
let obj = {};
let myEmptyObj = Object.create(null); //No default keys
let myMap = new Map();
console.log(myEmptyObj);
console.log(obj);
console.log(myMap);

let myNewObj = {
    10: "Number",
    "10" : "String"
}
console.log(myNewObj[10])

let myNewMap = new Map();
myNewMap.set(10,"Number");
myNewMap.set("10","String");
console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log(myNewObj);
console.log(myNewMap);
myNewMap.set(true,"Boolean");
myNewMap.set({a:1,b:2},"Object");
myNewMap.set(function doStuff(){},"Function");
console.log(myNewMap.get(true)); 
*/





//----Map Methods----//

/*
let myMap = new Map([
    [4, "Four"],
    ["Job Title", "Front-End developer"],
    [false, "Boolean"]
]);
myMap.set(10,"Number");
myMap.set("Name","String");
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has(false));
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.delete("Name"));
console.log(myMap.size);
myMap.clear();
console.log(myMap.size);
*/








//----Map VS WeakMap----//


//Weak map uses only objects as keys
/*
let mapUser = {theName : "Elzero"};
let myMap = new Map();
mapUser = null;
myMap.set(mapUser, "Object Value");
console.log(myMap);
console.log("#".repeat(30));
let weakMapUser = {theName : "Osama"};
let myWeakMap = new WeakMap();
myWeakMap.set(weakMapUser , "Object Value");
weakMapUser = null;
console.log(myWeakMap);
*/








//----Array.from Method----//


/*
console.log(Array.from("Osama"));
console.log(Array.from("12345",function(n){
    return +n + +n; 
}));

let myArray = [1,1,2,3,4];
// let mySet = new Set(myArray);
// console.log(mySet);
// console.log(Array.from(mySet)); 
// console.log([...new Set(myArray)]);//One line do the same function

function testArgs(){
    return arguments;
}

function af(){
    return Array.from(arguments);
}
console.log(testArgs("Osama","Ahmed","Sayed"));
console.log(af("Hello","World","Again"));
*/






//----Array.copyWithin method----//

/*
let myArray  = [10,20,30,40,50,"A","B"];
console.log(myArray);
// myArray.copyWithin(3);
console.log(myArray);
// myArray.copyWithin(4,6);
console.log(myArray);
// myArray.copyWithin(1,-2);
console.log(myArray);
myArray.copyWithin(1,-2,-1);
console.log(myArray);
*/





//----Array.some method----//


/*
let myArray = [1,2,3,4,5,6,7];
let myNumber = 5;
// let check = myArray.some(function(e){
//     console.log(this);
//     console.log("Test");
//     return e > 5;
// },myNumber);

let check = myArray.some(function(e){
    console.log(this);
    return e > this;
},myNumber);

console.log(check);

function checkValues(arr , value){
    return arr.some(function(e){
        console.log(this);
        return e === value;
    });
}

console.log(checkValues(myArray , 5));

let range = {
    min: 10,
    max : 20
};

let checkNumberInRange = myArray.some(function(e){
    console.log(this.min);
    console.log(this.max);
    return e >= this.min && e <= this.max;
},range);

console.log(checkNumberInRange);
*/





//----Array.every method----//


/*
let nums = [1,2,3,4,5,6,7,8,9,10];

const locations = {
    20: "Rome",
    30: "Spain",
    40: "Palestine",
    50: "Egypt",
};

let mainLocation = 15;
let locationsArray = Object.keys(locations);
console.log(locationsArray);
let locationsArrayNumber = locationsArray.map((n)=> +n);
console.log(locationsArrayNumber);
let check = locationsArrayNumber.every(function(e){
    return e > this;
},mainLocation);
console.log(check);
*/







//----Spread syntax and use cases----//


/*
console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

let myArr1 = [1,2,3];
let myArr2 = [4,5,6];
let allArrs = [...myArr1,...myArr2];
console.log(allArrs);

let copiedArray = [...myArr1];
console.log(copiedArray);

let allFriends = ["Osama","Ahmed","Sayed"];
let newFriends = ["Sameh","Mahmoud"];
allFriends.push(...newFriends);
console.log(allFriends);

let nums = [10,20,-100,100,1000,500];
console.log(Math.max(...nums));


let objOne = {
    a:1,
    b:2
};

let objTwo = {
    c:3,
    d:4
};

console.log({...objOne,...objTwo,e:5});
*/

///////////////////////////////////////////PRACTISE////////////////////////
// let theName = "Elzero";
// console.log([...new Set(theName)]);
// console.log(Array.from(theName));
// console.log([...theName]);
// console.log(Array.from(theName,function(e){
//     return e;
// }));
// console.log(Array(...theName));
//////////////////////////////////////////////////////////////////////////






//----Regular Expression-Modifiers----//



// i => case insensetive
// g => global
// m => multilines
/*
let str = "Hello Elzero Web School I Love elzero";
let regExpression  = /Elzero/i;
console.log(str.match(regExpression));
console.log(str.match(/elzero/));
console.log(str.match(/elzero/i));
console.log(str.match(/elzero/ig));
console.log(str.match(new RegExp("elzero" , "ig")));
*/




//----Regular Expression - Ranges pt1----//


/*
let tld = "Com Net Org Info Code Io";
let tldRe = /(org|info|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-9]/;
console.log(nums.match(numsRe));
numsRe = /[0-9]/g;
console.log(nums.match(numsRe));
console.log(nums.match(/[0-4]/g));

let notNums = "012345678910";
let notNumsRe = /[^0-3]/g;
console.log(notNums.match(notNumsRe));

let specialNums = "1!2@3#4$5%678910";
let specialRe = /[^0-9]/g;
console.log(specialNums.match(specialRe));


let practise = "Os1 Os1Os Os2 Os8 Os8Os";
let practiseRe = /Os[5-9]Os/g;
console.log(practise.match(practiseRe));
*/






//----Regular Expression - Ranges pt2----//


/*
let myString = "AaBbCcdefG123!234%^&*";
let AToZsmall = /[a-z]/g;
let notA2zsmall = /[^a-z]/g;
let A2ZCaps = /[A-Z]/g;
let notA2ZCaps = /[^A-Z]/g;
let ace = /[ace]/g;
let notAce = /[^ace]/g;
let smallAndCaps = /[a-z]/ig;
let smallAndCaps2 = /[a-zA-Z]/g;
let specialChars = /[^a-zA-Z0-9]/g;
console.log(myString.match(AToZsmall));
console.log(myString.match(notA2zsmall));
console.log(myString.match(A2ZCaps));
console.log(myString.match(notA2ZCaps));
console.log(myString.match(ace));
console.log(myString.match(notAce));
console.log(myString.match(smallAndCaps));
console.log(myString.match(smallAndCaps2));
console.log(myString.match(specialChars));
*/






//----Regular Expression - Character classes----//

/*
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let Word = /\W/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log([...new Set(email.match(dot))]);
console.log(email.match(word));
console.log(email.match(Word));
console.log(email.match(valid));
*/






//----Regular Expression - character classes pt2----//


/*
let names= "Sayed 1Spam 25Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /spam/ig;
let ran = /\bspam/ig;
let ran2 = /spam\b/ig;
let full = /(\bspam|spam\b)/ig;
console.log(names.match(re));
console.log(names.match(ran));
console.log(names.match(ran2));
console.log(names.match(full));
console.log(re.test(names));
console.log(/spam/ig.test("Osama"));
console.log(/spam/ig.test("Onespam"));
*/






//----Regular Expression - Quantifiers pt1----//


/*
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
let nums = "0110 10 150 05120 0560 350 00";
let urls = "https://google.com http://ww.website.net web.com";
let mailRe = /\w@\w\w.sa/ig;
let advancedMailRe = /\w+@\w+.(com|net)/ig;
let numRe = /0\d*0/ig;
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(mails.match(mailRe));
console.log(mails.match(advancedMailRe));
console.log(mails.match(/\w+@\w+.\w+/ig));
console.log(nums.match(numRe));
console.log(urls.match(urlsRe));
*/





//----Regualar Expression - Quantifiers pt2----//

/*
let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/ig));
console.log(serials.match(/s\d{4,5}s/ig));
console.log(serials.match(/s\d{4,}s/ig));
*/




//----Regular Expression - Quantifiers pt3----//


/*
let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
console.log(/ing$/ig.test(myString)); //Ends with ing?
console.log(/lzs$/g.test(names)); 
console.log(/^we/ig.test(myString)); 
console.log(/^we/ig.test(names)); 
console.log(/^\s/ig.test(names)); 
console.log(/^\d/ig.test(names)); 
console.log(/^\w/ig.test(names)); 
console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));
*/



//----Regular Expression - Replace with----//


/*
let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@" , "JavaScript"));
console.log(txt.replaceAll("@" , "JavaScript"));

let re = /@/ig;
console.log(txt.replaceAll(re,"JavaScript"));
*/




//----Regular Expression - Test, and Discussion----//


// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let re = /[4-8]{4}/ig;
// console.log(ip.match(re));

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let re = /Os\d*O/ig;
// console.log(specialNames.match(re));

// let phone = "+(995)-123 (4567)";
// let re = /\+\(\d{3}\)\-\d{3} \(\d{4}\)/ig;
// console.log(phone.match(re));


// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";



// let re = /\d{2}(\/|\s\-\s| )\d{2}(\/|\s\-\s| )\d{2,4}/ig;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"



// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w*.\w*(:\w{4}\/\w*.\w*\?id=\w{3}&\w{3}=\w*)?/ig;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));









//----Constructor Function----//


/*
function User(id , userName , salary){
    this.id = id;
    this.userName = userName;
    this.salary = salary + 1000;
}

let userOne = new User(100,"Elzero",5000);
let userTwo = new User(101,"Hassan",6000);
let userThree = new User(102,"Sayed",7000);
console.log(userOne.id);
console.log(userTwo.userName);
console.log(userOne.salary);
console.log(userTwo.salary);
console.log(userThree.salary);
*/







//---Constructor function new syntax----//


/*
class User {
    constructor(id, userName, salary) {
        this.id = id;
        this.userName = userName;
        this.salary = salary + 1000;
    }
}

let userOne = new User(100,"Elzero",5000);
let userTwo = new User(101,"Hassan",6000);
let userThree = new User(102,"Sayed",7000);

console.log(userOne.userName);
console.log(userTwo.id);
console.log(userThree.salary);
console.log(userOne instanceof User);
console.log(userOne.constructor === User);
*/






//----Deal with properties, and meethods----//


/*
class User {
    constructor(id, userName, salary) {
        this.id = id;
        this.userName = userName || "Unknown";
        this.salary = salary < 6000?   salary + 500 : salary;
        this.msg = function(){
            return `Hello, ${this.userName}, Salary is ${this.salary}`;
        }
    }

    writeMessage(){
        return `From Write message`;
    }
}

let userOne = new User(100,"Elzero",5000);
let userTwo = new User(101,"",6000);

console.log(userOne.userName);
console.log(userOne.salary);
console.log(userTwo.userName);
console.log(userTwo.salary);
console.log(userTwo.msg());
console.log(userTwo.msg); //Native code
console.log(userOne.writeMessage());
console.log(userOne.writeMessage);
*/





//----Update properties, and built-in constructors----//


/*
class User {
    constructor(id, userName, salary) {
        this.i = id;
        this.u = userName;
        this.s = salary + 1000;
    }

    updateUserName(newName){
        this.u = newName;
    }
}

let userOne = new User(100,"Elzero",5000);

console.log(userOne.u);
userOne.updateUserName("Osama");
console.log(userOne.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");
console.log(typeof strOne);
console.log(typeof strTwo);
console.log(strOne instanceof String);
console.log(strTwo instanceof String);
console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);
*/




//----Class static properties, and methods----//


/*
class User {
    static count =0 ;
    constructor(id, userName, salary) {
        this.i = id;
        this.u = userName;
        this.s = salary + 1000;
        User.count++;
    }
    static sayHello(){
        return "Hello From Class";
    }
    static countMembers(){
        return `${this.count} Members created`;
    }
}

let userOne = new User(100,"Elzero",5000);
let userTwo = new User(101,"Hassan",6000);
console.log(userOne.u);
console.log(userTwo.u);
console.log(userOne.count);
console.log(User.count);
// console.log(userOne.sayHello());
console.log(User.sayHello());
console.log(User.countMembers());
*/



//----Class inheritance----//


/*
//Parent class
class User {
    constructor(id, userName) {
        this.i = id;
        this.u = userName;
    }
    sayHello(){
        return "Hello From Class";
    }
    
}


//Derived class
class Admin extends User{
    constructor(id, userName, permissions) {
        super(id,userName);
        this.p = permissions;
    }
}

class Superman extends Admin{
    constructor(id,userName,permissions,ability){
        super(id,userName,permissions);
        this.a = ability;
    }
}

let userOne = new User(100,"Elzero");
console.log(userOne.u);
console.log(userOne.i);
let adminOne = new Admin(110,"Mohammed",1);
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());
let superOne = new Superman(200,"Toni",1,23);
console.log(superOne.a);
console.log(superOne.sayHello());
*/





//----Class Encapsulation----//


/*
class User{
    //Private property
    #e;
    constructor(id,userName,eSalary){
        this.i = id;
        this.u = userName;
        this.#e = eSalary;
    }
    getSalary(){
        return parseInt(this.#e);
    }
}

let userOne = new User(100,"Elzero","5000 P.E");
console.log(userOne.u);
console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);
// console.log(userOne.e *0.3);
*/





//----Prototype introduction----//

/*
class User {
    constructor(id,userName){
        this.i = id;
        this.u = userName;
    }
    sayHello(){
        return "Hello From Class";
    }
}

let userOne = new User(1,"Osama");
console.log(userOne.i);
console.log(User.prototype);
let strOne = "Elzero";
console.log(String.prototype);
*/






//----Add to prototype chain, and extend constructors features----//


/*
class User {
    constructor(id,userName){
        this.i = id;
        this.u = userName;
    }
    sayHello(){
        return "Hello From Class";
    }
}

let userOne = new User(1,"Osama");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);
User.prototype.sayWelcome = function(){
    return "Welcome";
};
console.log(userOne.sayWelcome());
Object.prototype.love = "Elzero Web School";
let arr = [];
console.log(arr.love);
console.log(userOne.love);
console.log(userOne);
String.prototype.addBeforeAndAfter = function(val){
    return `.${this}.`;
};

let str = "Osama";
console.log(str.addBeforeAndAfter());
*/





//----Object meta data, and descriptor pt1----//



/*
const myObject = {
    a:1,
    b:2,
};


Object.defineProperty(myObject, 'c' ,{
    //Default False
    writable : true,
    enumerable : true,
    configurable : true,
    value : 3,
});

console.log(myObject);
myObject.c = 100;
console.log(myObject);
for(let prop in myObject){
    console.log(prop,myObject[prop]);
}
console.log(delete myObject.c);
console.log(myObject);
*/



//----Object meta data, and descriptor pt2----//


/*
const myObject = {
    a:1,
    b:2,
};

Object.defineProperties(myObject,{
    c:{
        configurable: true,
        value : 3,
    },
    d:{
        configurable : true,
        value : 4,
    },
    e:{
        configurable : true,
        value : 5
    }
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject,'d'));
console.log(Object.getOwnPropertyDescriptors(myObject));
*/



///////////////////PRACTISE////////////////////

/*
class User {
    #c;
    str = "";
    re = /\w{4}\-\w{4}\-\w{4}\-\w{4}/ig;
    constructor(username, card) {
        this.u = username;
        this.#c = String(card);
        if(this.re.test(this.#c) === false){
            for(let i = 0 ; i < this.#c.length ; i++){
                if( i%4 === 0 && i !== 0 ){
                    if(this.#c[i] === "-"){
                        this.str += this.#c[i];
                    }else{
                        this.str += ("-"+this.#c[i]);
                    }
                }else{
                    this.str += this.#c[i];
                }
            }
        }else{
            this.str = this.#c;
        }
        console.log(this.#c);
    }
    showData(){
        return this.str;
    }
}


let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);
console.log(userOne.showData());
console.log(userTwo.showData());
console.log(userThree.showData());
console.log(userOne.c);
*/



// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };


// Object.defineProperties(myObj,{
//     id:{
//         enumerable:false,
//     }
// });
// delete myObj["country"]


// myObj.score = 500;

// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj)



//Date, and time----//
//******YEAR 2038 PROBLEM IN COMPUTER SCIENCE*****/

/*
let dateNow = new Date();
console.log(dateNow);
console.log(Date.now());
let seconds = Date.now()/1000;
console.log(seconds);
let minutes = seconds / 60;
console.log(minutes);
let hours = minutes / 60;
console.log(hours);
let days = hours/24;
console.log(days);
let years = days/365;
console.log(years);
*/





//----Get data, and time----//


/*
let dateNow = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow-birthday;
console.log(dateDiff/1000/60/60/24/365);
console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
*/






//----Set date, and time----//


/*
let dateNow = new Date();
console.log(dateNow);
console.log("#".repeat(30));

// dateNow.setTime(0);
// console.log(dateNow);

// dateNow.setTime(10000);
// console.log(dateNow);

dateNow.setDate(1);
console.log(dateNow);
dateNow.setDate(0);
console.log(dateNow);
dateNow.setDate(-10);
console.log(dateNow);
dateNow.setDate(40);
console.log(dateNow);
dateNow.setFullYear(2012,1);
console.log(dateNow);
dateNow.setMonth(13);
console.log(dateNow);
dateNow.setMonth(0);
console.log(dateNow);
*/





//----Formatting date, and time----//

/*
console.log(Date.parse("Oct 25 1982"));
let date1 =  new Date(404377200000);
console.log(date1);

let date2 = new Date("10/25/1982");
console.log(date2);

let date3 = new Date("10@25/1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date(1982,9,25,2,10,0);
console.log(date6);

let date7 = new Date(1982,9,25);
console.log(date7);

let date8 = new Date("1982-10-25T06:10:00Z");
console.log(date8);
*/







//----Tracking Operations Time----//


//Search for [perfomance.now() , performance.mark()]
/*
let start = new Date();
for(let i =0 ; i < 10000;i++){
    document.write(`<div>${i}</div>`);
}
let end = new Date();

let duration = end - start;
console.log(duration);
*/





//----Generator Function----//


/*
function* generateNumbers(){
    yield 1;
    alert("Hello after yield one");
    yield 2;
    yield 3;
    yield 4;
}

let generator = generateNumbers();
console.log(typeof generator);
console.log(generator);
console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next().done);
console.log(generator.next());
console.log(generator.next());

for(let value of generateNumbers()){
    console.log(value);
}

for(let value of generator){
    console.log(value);
}
*/







//----Delegate generator function----//


/*
function* generateNums(){
    yield 1;
    yield 2;
    yield 3;
}

function* generateLetters(){
    yield "A";
    yield "B";
    yield "C";
}

function* generateAll(){
    yield* generateNums();
    yield* generateLetters();
    yield* [4,5,6];
}


let generator = generateAll();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Done"));
console.log(generator.next());
for(let value of generateAll()){
    console.log(value);
}
*/




//----Generate infinite numbers----//


/*
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    return "Done";
    yield 4;
}

function* infNumbers(){
    let index =0 ;
    while(true){
        yield index++;
    }
}

let generator = generateNumbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
for(let value of generateNumbers()){
    console.log(value);
}

for(let value of infNumbers()){
    console.log(value);
}
*/





//----Modules Import, and Export----//


/*
let a = 10;
let arr = [1,2,3,4];
function sayHello(){
    return "Hello";
}
*/



