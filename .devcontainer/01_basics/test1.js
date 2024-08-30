const CustomerId = 4133
var customeremail = "shubh@gmail.com"
let customerCity = "Shimla"
customerName = "Ravi"

// CustomerID =2 //NOT ALLOWED 

customeremail = "shubham@gmail.com"
customerCity = "Chamba"
customerName = "Abhi"

/*
PREFER NOT TO USE var 
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

console.table([CustomerId,customeremail,customerCity,customerName]);
