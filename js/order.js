import { ObjectFormatter } from './formatutils';

class Order {
    constructor(orderId, orderDate, amonut) {
        [this.orderId, this.orderDate, this.amonut] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export { Order };