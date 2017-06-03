import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';
import { Order } from './order';
import { DataProcessor } from './arrowfunctions';
import { HeavyWorker, HeavyWorker2 } from './withoutpromises';
import * as PromiseWorkers from './withpromises';

let customer = new InternetCustomer(
    10, 'Swati', 'New Delhi', 12000, true, 'http://blogs.msdn.com/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCsvString = '10,Swati,New Delhi, 12000,true';
//let anotherCustomer = InternetCustomer.createCustomer(customerCsvString);
let anotherCustomer = Customer.createCustomer(customerCsvString);

//order related processing
anotherCustomer.addOrder(new Order(1, new Date(), 12000));
anotherCustomer.addOrder(new Order(2, new Date(), 10000));
anotherCustomer.addOrder(new Order(3, new Date(), 22000));
anotherCustomer.addOrder(new Order(4, new Date(), 32000));

for (let order of anotherCustomer.getOrders()) {
    console.info(order.toString());
}

console.info('Iterating customer info directly');
for (let order of anotherCustomer) {
    console.info(order.toString());
}

console.log(anotherCustomer.format());

console.log(JSON.stringify(anotherCustomer));

//arrow functions demo
let dataProcessor = new DataProcessor();
let result = dataProcessor.process(
    (a, b) => a + b,
    function (a, b) {
        return a - b;
    },
    (a, b) => {
        console.log('Arrow functions with block...');
        return a * b;
    }
);

console.log(result());

//Async threads
let worker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();

worker1.doHeavyWork(10,
    (result) => {
        console.log('Worker 1 completed .. ' + new Date() + JSON.stringify(result));

        worker2.doHeavyWork(300,
            (result) => {
                console.log('Worker 2 completed .. ' + new Date() + JSON.stringify(result));
            });
    });

//With promise
let promiseWorker1 = new PromiseWorkers.HeavyWorker();
let promiseWorker2 = new PromiseWorkers.HeavyWorker2();
var input = 200;

Promise.all(
    [
        promiseWorker1.process(input),
        promiseWorker2.process(input)
    ]).then(
    data => console.log('Both successfully completed .. ' + new Date() + JSON.stringify(data)),
    error => console.log('One of the workers failed .. ' + new Date() + JSON.stringify(error))
    );


//npm init -y
//npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-polyfill babel-preset-es2017 babel-preset-env webpack http-server
//npm run webpack
//npm run serve

// //Generators must be prefixed with *
// function* downloadData() {
//     console.log('...start');
//     yield 10;
//     console.log('... start 2');
//     yield 20;
//     console.log('... start 3');
//     yield 30;
//     // yield means preserve execution state
// }

// var output = downloadData();
// output.next();

// for(let item of output) {
//     console.log(item);
// }

