function name(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}
//name()

function addtwonumbers(number1,number2){
    let result= (number1+number2);
    return result
}
const number =addtwonumbers(3,9)
console.log(number);

function userlogin(username){
    if(username == null){
        console.log("Please enter a valid name");
        return
    }
    //console.log("username");
    return `${username} just logged in`
}
console.log(userlogin("Shubham"));

function carprice(...num1) {
    return num1
}
console.log(carprice("100", "200" ," 300" ,"400"));

/// HOW TO ADD OBJECT IN FUNCTION 

const myobj={
    username:"hitesh",
    price:"700",
}
function me(obj){
    console.log (`Welcome ${obj.username},cost of this book is ${obj.price}`)
}
me(myobj);


//// HOW TO DD ARRAY IN FUNCTION

const myArray= [100,200,3000,400]

function array(arr){
    return arr[2]
}
console.log(array(myArray))