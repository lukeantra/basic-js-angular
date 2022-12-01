const states = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
};


class myPormise {
    #state = states.PENDING;
    #value = undefined;
    #thenqueue = [];
    #catchqueue = [];

    constructor(cbFn) {


        if (typeof cbFn === 'function') {
            try {
                cbFn(this.#onFulfilled.bind(this), this.#onRejected.bind(this))
            }

            catch (err) { }
        }
    }

    then(fulfilledFn, catchFn) {
        const controlPromise = new myPormise();
        this.#thenqueue.push([controlPromise, fulfilledFn, catchFn]);

        if (this.#state === states.FULFILLED) {
            this.#propagateResolved();
        } else if (this.#state === states.REJECTED) {
            this.#propagateRejected();
        }

        return controlPromise;

    }

    catch() {

    }

    finally() {

    }

    #onFulfilled(value) {
        if (this.#state === states.PENDING) {
            this.#state = states.FULFILLED;
            this.#value = value;
            this.#propagateResolved();
        }
    }

    #onRejected(value) {
        if (this.#state === states.PENDING) {
            this.#state = states.REJECTED;
            this.#value = value;
            this.#propagateRejected();
        }
    }

    #propagateResolved() {
        this.#thenqueue.forEach(([a, b]) => {

        })

    }

    #propagateRejected() {

    }

}

const p = new Promise ((res, rej) => {
    res(42);
})
