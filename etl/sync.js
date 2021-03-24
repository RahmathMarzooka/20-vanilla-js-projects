const fs = require("fs");
const csvToJson = require("./utils");

const customers = fs.readFileSync('customer.csv', 'utf8')
const cars = fs.readFileSync('car.csv', 'utf-8')


let carJson = csvToJson(cars);
let customerJson = csvToJson(customers);


let customerCarJson = [];
customerJson.forEach(customer => {

    console.log('customer', customer)
    let customerCar = carJson.find((car) => {
        return car.customerId == customer.id
    });

    // console.log(customerCar)

    customerCarJson.push({
        id: customer.id,
        name: customer.name,
        age: customer.age,
        carCompany: customerCar.carCompany,
        carModel: customerCar.carModel

    })
    console.log(customerCarJson)
})
fs.writeFileSync("customerCarJSON.txt", JSON.stringify(customerCarJson))


/*

[
    {
        id:1004,
        name:"john",
        age:34,
        carCompany:'ford',
        carName:'figo'
    }
]
 */

// use fs.readFileSync and fs.writeFileSync

