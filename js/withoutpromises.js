const DEFAULT_TIMEOUT = 3000;

class HeavyWorker {
    doHeavyWork(input, callback) {
        setTimeout(() => {
            let status = 'Failed';
            
            if (input >= 100) {
                status = 'SUCCESS';
            }
            if (typeof callback === 'function') {
                callback({
                    status
                });
            }
        }, DEFAULT_TIMEOUT);
    }
}

class HeavyWorker2 {
    doHeavyWork(input, callback) {
        setTimeout(() => {
            let status = 'Failed';

            if (input >= 200) {
                status = 'SUCCESS';
            }

            if (typeof callback === 'function') {
                callback({
                    status
                });
            }
        }, DEFAULT_TIMEOUT);
    }
}

export { HeavyWorker, HeavyWorker2 }