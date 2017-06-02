const DELIMITER = ', ';
const START_POS = 0;
const NO_OF_TRAIL_CHARACTERS = 2;

class ObjectFormatter {
    static format (obj) {
        let formattedMessage = '';

        if(obj) {
            for(let prop in obj) {
                var validation = obj[prop] &&
                    typeof obj[prop] !== 'function';

                if(validation) {
                    formattedMessage += `${obj[prop]}${DELIMITER}`
                }
            }

            formattedMessage = formattedMessage.substr(
                START_POS, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
        }

        return formattedMessage;
    }
}

export { ObjectFormatter }