/**
 * @constructor
 * @param {function(Array)=} dataLoaded
 * @extends {Array}
 */
export default function Forecasts(url, dataLoaded) {
  dataLoaded = dataLoaded || function() {};

  let arr = [];
  arr.active = 1;
  let _callbacks = {
    load: {
      fireImmadiate: false,
      funcs: [dataLoaded.bind(arr)]
    }
  };

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(function(item) {
        arr.push(item);
      });
      return arr;
    })
    .then(_executeCallbacks.bind(arr, "load", true));

  arr.set = function(i) {
    arr.activeIndex = i;
    arr.active = arr[i];
    _executeCallbacks("change");
    return arr[i];
  };

  arr.on = function(event, func) {
    if (!(event in _callbacks)) {
      _callbacks[event] = {
        fireImmediate: false,
        funcs: []
      };
    }
    _callbacks[event].funcs.push(func);
    if (_callbacks[event].fireImmediate) {
      func.call(arr);
    }
    return arr;
  };
  /**
   *
   * @param {string} event
   * @param {boolean=} fireImmediate
   */
  function _executeCallbacks(event, fireImmediate) {
    _callbacks[event].funcs.forEach(function(func) {
      func.call(arr);
    });
    if (fireImmediate !== undefined) {
      _callbacks[event].fireImmediate = fireImmediate;
    }
  }

  return arr;
}
