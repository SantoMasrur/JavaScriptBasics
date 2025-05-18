//objects

var customer = {
    firstName: 'Santo',
    lastName: 'Masrur',
    cars: ["Volvo", "Toyota", "Tesla"]
}

//Dot notation
customer.firstName = 'Mike'

//Braket notation 
customer['lastName'] = 'Silver'

console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays

// var cars = ["Volvo", "Toyota", "Tesla"]
// console.log(cars[2])
// cars[2] = "BMW" //replace the object from the array
// console.log(cars[2])

console.log(customer.cars[1])