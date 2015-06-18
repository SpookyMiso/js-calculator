/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `m
 * @variable PRIVATE { Number } `total`emory`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule () {
  var memory = 0;
  var total = 0;


  var calculator = {
     load: _load,
     getTotal: _getTotal,
     add: _add,
     subtract: _subtract,
     multiply: _multiply,
     divide: _divide,
     recall: _recall,
     save: _save,
     clear: _clear,


  };

  return calculator;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

function _load (x) {
  total = x;
  return total;
}

  /**
   * Return the value of `total`
   * @return { Number }
   */

function _getTotal () {
  return total;
}

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

function _add (sum) {
  if (typeof (sum) !== typeof 0){
    return typeof "";
  }
    return total += sum;

}

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

function _subtract (difference) {
  if (typeof (difference) !== typeof 0) {
    return typeof "";
  }
    return total -= difference;

}

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

function _multiply (product) {
  if (typeof (product) !== typeof 0) {
    return typeof "";
  }
    return total *= product;

}

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

function _divide (quotient) {
  if (typeof (quotient) !== typeof 0) {
    return typeof "";
  }
    return total /= quotient;
}

<<<<<<< HEAD
 /**
   * Stores the value of `total` to `memory`
=======
  /**
   * Return the value stored at `memory`
   * @return { Number }
>>>>>>> 3ccc69f09b41c18d89ec56c38a0fc1c0e3e8951e
   */

function _save () {
  memory = total;
  return memory;

<<<<<<< HEAD
}

/**
   * Return the value stored at `memory`
   * @return { Number }
=======
  /**
   * Stores the value of `total` to `memory`
>>>>>>> 3ccc69f09b41c18d89ec56c38a0fc1c0e3e8951e
   */

function _recall () {
  return memory;

}
  /**
   * Clear the value stored at `memory`
   */
function _clear () {
  memory = 0;

}


<<<<<<< HEAD
}
=======
  /**
   * Validation
   */

>>>>>>> 3ccc69f09b41c18d89ec56c38a0fc1c0e3e8951e
