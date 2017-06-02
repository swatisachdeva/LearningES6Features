import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';


let customer = new InternetCustomer(
    10,'Swati', 'New Delhi', 12000, true, 'http://blogs.msdn.com/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCsvString = '10,Swati,New Delhi, 12000,true';
//let anotherCustomer = InternetCustomer.createCustomer(customerCsvString);
let anotherCustomer = Customer.createCustomer(customerCsvString);

console.log(anotherCustomer.format());


//npm init -y
//npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-polyfill babel-preset-es2017 babel-preset-env webpack http-server
//npm run webpack
//npm run serve

