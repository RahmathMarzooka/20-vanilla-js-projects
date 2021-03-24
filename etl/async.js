const fs = require("fs");
const csvToJson = require("./utils");

//use fs.readFile and fs.writeFile

fs.readFile('car.csv', 'utf-8', (err, cars) => {
    let carJson = csvToJson(cars)
    fs.readFile('customer.csv', 'utf-8', (err, customer) => {
        let customerJson = csvToJson(customer)



        let customerCarJson = [];
        customerJson.forEach((customer) => {

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
        })
        fs.writeFile('customerCarJsonAsync.txt', JSON.stringify(customerCarJson), (err) => {
            if (err)
                console.log('not found');
            else {
                console.log('file written successfully')
            }
        }
        );
    });
});
