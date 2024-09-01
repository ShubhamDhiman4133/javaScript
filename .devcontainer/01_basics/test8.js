const obj ={
    username: "Shubham",
    price:99,

    welcome:function(){
        console.log(`${this.username},welcome back!`)
        console.log(this)       //RETURN EVERYTHING INSIDE SCOPE
    }

}
obj.welcome()
console.log (this)              //  DOES NOT RETURN ANYTHING BECAUSE NOTHING IS AVAILABLE IN GLOBAL

const funct = (num1, num2) => {
        return num1+num2
}
console.log(funct(3,5))

const funt = (num1, num2) => num1+num2   // WE CAN USE IN THIS WAY BUT IF WE USE {} ,THEN WE HAD TO USE RETURN TO PRODUCE RESULT.

console.log(funct(3,50))