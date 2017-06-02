import { Customer } from './customer';
import { ObjectFormatter } from './formatutils';

class InternetCustomer extends Customer {
    constructor (id, name, address, credit, status, blogUrl) {
        super(...arguments);

        this.blogUrl = blogUrl;
    }
    format() {
        // Template strings
        // let formattedMessage = `${super.format()}, ${this.blogUrl}`;

        let formattedMessage =
            ObjectFormatter.format(this).toUpperCase();
        
        return formattedMessage;
    }
}

export { InternetCustomer };