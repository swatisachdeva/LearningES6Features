const DEFAULT_TIMEOUT = 3000;
const VALID_VALUE = 200;
const SUCCESS = 'Success';
const FAILED = 'Failed';

class HeavyWorker {
    process(input) {
        let workerPromise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    let status = input >= VALID_VALUE ? SUCCESS : FAILED;
                    if (status === SUCCESS) {
                        resolve({ status });
                    } else {
                        reject({ status });
                    }
                }, DEFAULT_TIMEOUT);
            });
        return workerPromise;
    }
}

class HeavyWorker2 {
    process(input) {
        let workerPromise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    let status = input >= VALID_VALUE ? SUCCESS : FAILED;
                    if (status === SUCCESS) {
                        resolve({ status });
                    } else {
                        reject({ status });
                    }
                }, DEFAULT_TIMEOUT);
            });
        return workerPromise;
    }
}

export { HeavyWorker, HeavyWorker2 }