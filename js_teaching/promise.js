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
  #state = states.PENDING;
  #value = undefined;
  #thenqueue = [];
  #catchqueue = [];


  constructor(cb) {

    if (typeof cb === 'function') {
      try {
        cb(this.#onFulfilled.bind(this), this.#onRejected.bind(this))
      }
      
      catch (err) {

        #onRejected(err);
      }
    }
    

    then() {
    
    }

    catch() {

    }
    
    #onFulfilled(value) {
      if (this.#state === states.PENDING) {
        this.#state = states.FULFILLED;
        this.#value = value;
        this.#propagationResolved();
      }
    }
    
  }
}
