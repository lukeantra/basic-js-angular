const states = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
  };


class myPormise {
  // states = {
  //   PENDING: 'pending',
  //   FULFILLED: 'fulfilled',
  //   REJECTED: 'rejected',
  // };



  constructor(cb) {
    this.#state = states.PENDING;
    this.#value = undefined;
    this.#thenqueue = [];
    this.#catchqueue = [];

    if (typeof cb === 'function') {
      try {
        cb(this.#onFulfilled.bind(this), this.#onRejected.bind(this))
      }
      
      catch (err) {}
    }
  }
    

    then() {

    }

    catch() {

    }

    finally() {

    }
    
    #onFulfilled(value) {
      if (this.#state === states.PENDING) {
        this.#state = states.FULFILLED;
        this.#value = value;
        this.#propagationResolved();
      }
    }

    #onRejected(value) {
        if (this.#state === states.PENDING) {
          this.#state = states.FULFILLED;
          this.#value = value;
          this.#propagationResolved();
        }
      }
    
}
