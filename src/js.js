//Reversed Word
const reversedFn = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
// Reversed Sentnence 

// jsx
const reverseSentence = Word.split(" ").reverse().join(" ");

// for loop
const reverseWords = (str) => {
    let words = [];
    let word = "";
    
    for (let i = 0; i < str.length; i++) {
      console.log(i,"pi");
      if (str[i] === " ") {
        words.push(word);
        word = ""; // Reset word
      } else {
        word += str[i];
      }
    }
    words.push(word);

    let reversedSentence = "";
    
    for (let i = words.length - 1; i >= 0; i--) {
      reversedSentence += words[i];
      if (i !== 0) reversedSentence += " "; // Add space between words
    }
  
    return reversedSentence;
  };
  
    // let message = "Hello world"
  // let messagerepet = []
  // for (let i = 0; i < message.length; i++) {
  //   let element =message.codePointAt(i);
  //   messagerepet[i] = element
  // }
  // console.log(String.fromCodePoint(...messagerepet));

  // const spaceBetween = "hello world"
  // const newString1 = spaceBetween.trim().padEnd(19, '#');

  // const MyOccupation = 'Developer';
  // const word = "Hello World kilo meter"
  // console.log(word.split(" "));

  // const ab1 = [1,2,3]
  // const ab2 = [4,5,6]
  // const concart = ab1.concat(ab2)
  // console.log(concart);

  //   let text1 = "Regular expression";
  // const result = text1.match(/xpr/g);
  // console.log(result);

  // const myString = `Mam, Mom, Mum`;
  // const regPattern = /M/g;
  // const regPattern = /M.m/g;

  // const myString = `5.00, 510, 570, 5.01, 5.10,`;
  // const regPattern = /5.0/g
  // const regPattern = /5\.0/g;

  // const myString = `Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also obJects`;
  // const regPattern = /[J]/g;

  // const myString = `Regular expressions are patterns used to match character combinations in strings 100% true. In JavaScript, regular expressions are also
  // objects567!`;
  // const regPattern = /\D/g;//global

  // let mixedString = `$5, €10, ¥109`;
  // let regex1 = /\p{Sc}\d/gu;
  // console.log( regex1.test(mixedString));//true

  // const myString = `Regular expressions are awesome!`;
  // const regPattern = /s{7}/g;
  // const regPattern = /a*/g;
  // const regPattern = /d*/g;

  // const myString = '0 12 999 78 9880 109345'
  // const regPattern = /\d{2,3}/g
  // console.log( regPattern.test(myString));

  // let domainList= "google.com apple.com apple23.com.au support"
  // let regexp1= /(\w+\.)+\w+/g;
  // console.log(domainList.match(regexp1));

  // let dateExpression = /(?<day>[0-9]{2})-(?<month>[0-9]{2})-(?<year>[0-9]{4})/;
  // let dateString = "29-09-2022";
  // let theGroups = dateString.match(dateExpression).groups;
  // console.log('The Year Is: ' + theGroups.year); // 2022
  // console.log('The Month Is: ' + theGroups.month); // 09
  // console.log('The Day Is: ' + theGroups.day); // 2022

  // let simpleString = "my name is jack Rayan657!";
  // let regExp = /[A-Za-z]/g
  // console.log(simpleString.match(regExp))

  // const regExp3 = /\d{4}/g
  // const myText = "I was born in 1990. Do you know anyone that is born in 1990?";
  // const output1 = myText.replace(regExp3, "1989");
  // console.log(output1);

  // let testString1 = "This James Bond movie was great. I love watching James Bond movies with my brother.";
  // let output2 = testString1.replace(/James Bond/g, "Star Wars").replace("brother", "girlfriend");
  // console.log(output2);

  // const testString4 = "I hate JavaScript and I hate RegEx as well!";
  // const regExp5 = /hat(e)/g;
  // function replacerFn2(match,p1) {
  // console.log(`The matched string ${match}, capturing ${p1}`);
  // return `love`;
  // }
  // console.log(testString4.replace(regExp5, replacerFn2));

  // let timerId = setTimeout(() => console.log("It will never be printed"), 2000);
  // let timerId = setInterval(() => console.log('tick tock, tick tock'), 3000);
  // alert(timerId);
  // clearTimeout(timerId);

  // let MyPromise = new Promise ((resolve,reject) => {
  //   setTimeout(() => resolve('a'),1000)
  // }).then((result) => {
  //   return result + 'b'
  // }).then((result) => {
  //    return result + 'c'
  // }).then((result) => {
  //   return result + 'd'
  // })

  // MyPromise.then((result) => console.log(result))

  //   function getUserByUserId(id) {
  //     if (typeof id !== "number") {
  //       throw new Error("Invaild function!");
  //     }
  //     return new Promise((resolve, reject) => {
  //       resolve({
  //         id: id,
  //         username: "admin",
  //         role: "administrator",
  //       });
  //     });
  //   }
  //  try {
  //   getUserByUserId()
  //   .then((user) => console.log(user))
  //   .catch((err) => console.log(`Caught by .catch ${err}`));

  //  } catch (error) {
  //    console.log("this is from the try catch function :",error)
  //  }

  // const promiseOne = new Promise ((resolve ,reject) => resolve('first'))
  // const promiseTwo = new Promise ((resolve ,reject) => setTimeout(() =>{
  //   resolve('second')
  // },3000))
  // const promiseThree = new Promise ((resolve ,reject) => setTimeout(() =>{
  //   resolve('three')
  // },1000))
  // const promiseFour = new Promise ((resolve ,reject) => setTimeout(() =>{
  //   resolve('four')
  // },2000))

  // let promiseArray = [promiseOne, promiseThree, promiseTwo, promiseFour]
  // Promise.all(promiseArray).then((value) => {
  //   console.log(value,"value");
  // })

  // let testObject = {
  //   a: 1,
  //   b: 2,
  //   c: 3,
  //   d: 4,
  //   }
  // let propertyNames = "";
  // for(let key in testObject) {
  //   console.log("keys:",key,"values:",testObject[key]);
  // // propertyNames += names;
  // }
  // console.log(propertyNames); // => "abcd"

  // let greeting = function(name,lastName){
  //   return `Nice to see you again ${name} ${lastName}`;
  //   }
  //   //invoke function expression
  //   let theMessage = greeting('Luke', "Perry");
  //   console.log(theMessage);

  // function outerFun() {
  //   let x = 10;
  //   function innerFun() {
  //   let y= 20;
  //   console.log(x+y);
  //   }
  //   return innerFun;
  //   }

  //   let firstOuter = outerFun();
  //   firstOuter();

  //Inheritance

  // class Animal {
  //   constructor(name) {
  //   this.speed = 0;
  //   this.kilo = name;
  //   }
  //   startRunning(speed) {
  //   this.speed = speed;
  //   return `The ${this.kilo} runs with speed of ${this.speed}km per hour.`;
  //   }
  //   stopRunning() {
  //   this.speed = 0;
  //   console.log(`The ${this.kilo} stopped running and now sits still.`);
  //   }
  //   }

  //   class Dog extends Animal {
  //     bark() {
  //     return `The ${this.kilo} barks!`;
  //     }
  //     }
  //     let dog = new Dog("Dog");
  //     console.log(dog.startRunning(10));
  //     console.log(dog.bark()); //The Dog barks!
  //     class Cat extends Animal {
  //       bark() {
  //       return `The ${this.kilo} meoww!`;
  //       }
  //       }
  //       let cat = new Cat("Cat");
  //       console.log(cat.startRunning(5));
  //       console.log(cat.bark()); //The Dog barks!

  // class Person {
  //   constructor(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   }
  //   get fullName() {
  //   return `${this.firstName} & ${this.lastName}`;
  //   }
  //   set fullName(name) {
  //   const parts = name.split(' ');
  //   this.firstName = parts[0];
  //   this.lastName = parts[1];
  //   }
  //   }
  //   const haroldKumar = new Person();
  //   haroldKumar.fullName = 'Harold Kumar';
  //   console.log(haroldKumar);

  //setters and getters for objects
  // const testObj = {
  //   name: 'Andy',
  //   get userName() {
  //   return this.name;
  //   },
  //   set userName(newValue) {
  //   this.name = newValue;
  //   }
  //   };
  //   testObj.userName = 'Rick';
  //   console.log(testObj.userName);

  // class UserList{
  //   constructor(name){
  //   this.name = name;
  //   }
  //   static staticPropery = 'Some Info';
  //   static staticMethod(){
  //   console.log(this.name);
  //   }
  //   }
  //   let newUser = new UserList('Simon');
  //   //call a static method using the class name
  //   UserList.staticMethod();
  //   console.log(UserList.staticPropery);

  //Overwriting Method

  // class Animal {
  //   constructor(name) {
  //     this.speed = 0;
  //     this.name = name;
  //   }
  //   startRunning(speed) {
  //     this.speed = speed;
  //     console.log(`the ${this.name} to fast of ${this.speed} km/per hour`);
  //   }
  //   stopRunning() {
  //     this.speed = 0;
  //     console.log(
  //       `the ${this.name} sitting and the end of running speed is ${this.speed} km/per hour`
  //     );
  //   }
  // }

  // const animal = new Animal();
  // class Dog extends Animal {
  //   stopRunning() {
  //     //this method will be used by the instances of the Dog class
  //     super.stopRunning();
  //     console.log("The dog is licking its paws");
  //   }
  //   bark() {
  //     return `The ${this.name} barks!`;
  //   }
  // }

  // const dog = new Dog("Dog");
  // console.log(dog.startRunning(10));
  // console.log(dog.bark());
  // console.log(dog.stopRunning());

//   const userRoles = {
//     admin : "Full Access",
//     editor: "Edit Access",
//     viewer: "View Access"
//   }

//   function getRoled(role){
//     return userRoles[role] || "No Access" 
//   }

//  console.log(getRoled("editor"));

//encapslation
// function CloserEncasplation() {
//     let entries = [];
//    return{
//      addEntries : function(text){
//        return entries.push(text)
//       },
//       readEntries:function(){
//        return entries.join('\n')
//       }
//    }
//    }
//  const getData = CloserEncasplation()
//  getData.addEntries("first sentence")
//  getData.addEntries("second sentence")
//  console.log(getData.readEntries())