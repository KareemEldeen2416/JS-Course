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


/*
let nums = [10,20,30,40];
let reducedArray = nums.reduce(function(acc,currentElement , index, arr){
     console.log(`Accumulator is ${acc}`);
     console.log(`Current Element is ${currentElement}`);
     console.log(`Index is ${index}`);
     console.log(`Arrays is ${arr}`);
    return acc + currentElement;
} , 5);
*/



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
