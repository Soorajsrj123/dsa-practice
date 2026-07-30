


// Q)2694 Event Emitter


class EventEmitter {
  #subscribers = new Map();
  subscribe(eventName, callback) {
    // if eventName is not present inside map then create a new Key initialized with value array []
    if (!this.#subscribers.has(eventName)) {
      this.#subscribers.set(eventName, []);
    }
    // else {
    //      // if eventName is already present then access the array and push callback into that array
    //       this.#subscribers.get(eventName).push(callback)
    // }
    let callbacks = this.#subscribers.get(eventName);
    callbacks.push(callback);
    return {
      //    return a function to remove appropriate callback from the map
      unsubscribe: () => {
        // finding the index of the callback in the array for later removal
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          //   removes callback from the array
          callbacks.splice(index, 1);
          return;
        }
      },
    };
  }
     emit(eventName, args = []) {
     //   fetching the specific keys value from the Map
          let callbacks = this.#subscribers.get(eventName);
          // if callbacks array not present return an empty array
    if (!callbacks) {
      return [];
    } else {
     //     if callbacks array is present call each function inside that array with args
      return callbacks.map((fn) => {
        return fn(...args);
      });
    }
  }
}