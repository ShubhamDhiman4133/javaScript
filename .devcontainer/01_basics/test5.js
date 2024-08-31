//Singleton Object --- WHEN CREATED THROUGH CONSTRUCTOR

//Object Literals
const mysym = Symbol("key1")
console.log(mysym);
console.log(typeof mysym);


let jsuser = {
    name:"Shubham",
    "fullname": "Shubham Dhiman",
    [mysym]: mysym,
    age :22,
    email : "shubham662002@gmail.com",
    isloggedin: false,
    lastlogin: ["Monday","Friday"],
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mysym]);
console.log(typeof jsuser[mysym]);

jsuser.greetings =function (){
    console.log(`Hello World I am, ${this.fullname}`);
}
console.log(jsuser.greetings());

//const obj = new Object()         --- SINGLETON OBJECT

const tinderuser={}

tinderuser.id ="32456"
tinderuser.name ="shiva"
tinderuser.email="hvjvvg@gmail.com"
tinderuser.isloggedin= false;

console.log(tinderuser)

const regularuser={
    fullname:{
        username:{
            firstname:"Shubham",
            lastname:"Dhiman"
        }
    }
}
console.log(regularuser.fullname.username.firstname)

const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"a" ,4:"b"}

const obj3 ={...obj1 , ...obj2}    // USE SPREAD INSTEAD OF USING ASSIGN
console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));




