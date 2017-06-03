import { ObjectFormatter } from './formatutils';
import { Order } from './order';


const COL_SEPARATOR = ',';

const ORDERS_SYMBOL = Symbol('Orders Symbol');

class Customer {
    constructor(id, name, address, credit, status) {
        // Destrcuturing
        [this.id, this.name, this.address,
            this.credit, this.status] = arguments;
        
        // [this.orders] = [];
        //replacing with Symbol so that it becomes private to class
        //this of - Reaching the objwct via property
        //Symbol helps to 
        this[ORDERS_SYMBOL] = [];
    }

    format() {
        // Template strings
        // let formattedMessage = `${this.id}, ${this.name},
        //     ${this.address}, ${this.credit}, ${this.status}`;
        
        //return formattedMessage;
        return ObjectFormatter.format(this);
    }

    addOrder(order) {
        if(order) {
            // this.orders.push(order);
            this[ORDERS_SYMBOL].push(order);
        }
    }

    getOrders() {
        // return this.orders;
        return this[ORDERS_SYMBOL];
    }

    *[Symbol.iterator]() {
        // for(let order of this.orders) {
        for(let order of this[ORDERS_SYMBOL]) {
            yield order;
        }
    }

    static createCustomer(csvString) {
        let customer = null;

        if(csvString) {
            let splittedSting = csvString.split(COL_SEPARATOR);

            // Spread parameter
            customer = new Customer(...splittedSting);
        }
        return customer;
    }
}
export { Customer };