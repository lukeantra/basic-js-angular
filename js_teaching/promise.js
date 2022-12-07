const states = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
};

const isThenable = maybePromise => maybePromise && typeof maybePromise.then === 'function';

class myPromise {
    #state = states.PENDING;
    #value = undefined;
    #reason = undefined;
    #thenqueue = [];
    #catchqueue = [];

    constructor(computation) {

        if (typeof computation === 'function') {
            // needs to delay this event
            setTimeout(() => {
                try {
                    computation(this.#onFulfilled.bind(this), this.#onRejected.bind(this))
                }
                catch (err) { }
            })
        }
    }

    then(fulfilledFn, catchFn) {
        const controlPromise = new myPromise();
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

    #onRejected(reason) {
        if (this.#state === states.PENDING) {
            this.#state = states.REJECTED;
            this.#reason = reason;
            this.#propagateRejected();
        }
    }

    #propagateResolved() {
        this.#thenqueue.forEach(([controlPromise, fulfilledFn]) => {
            if (typeof fulfilledFn === 'function') {
                const valueOrPromise = fulfilledFn(this.#value);

                if (isThenable(valueOrPromise)) {
                    valueOrPromise.then(
                        value => controlPromise.#onFulfilled(value),
                        reason => controlPromise.#onRejected(reason),
                    )
                } else {
                    controlPromise.#onFulfilled(valueOrPromise);
                }
            }else {
                return controlPromise.#onFulfilled(this.#value);
            }
        })
        this.#thenqueue = [];
    }

    #propagateRejected() {

    }

}

const promise = new myPromise((res, rej) => {
    console.log
    setTimeout(() => res(2), 1000);
});

const firstThen = promise.then(value => {
    console.log(value);
    return value + 1;
})


const secondThen = firstThen.then(value => {
    console.log(value);
    return value + 1;
})
