import { ObjectFormatter } from './formatutils';
const COL_SEPARATOR = ',';

class Customer {
    constructor(id, name, address, credit, status) {
        // Destrcuturing
        [this.id, this.name, this.address,
            this.credit, this.status] = arguments;
    }

    format() {
        // Template strings
        // let formattedMessage = `${this.id}, ${this.name},
        //     ${this.address}, ${this.credit}, ${this.status}`;
        
        //return formattedMessage;
        return ObjectFormatter.format(this);
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