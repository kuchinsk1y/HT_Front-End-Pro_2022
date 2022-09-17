function _throttle(func, time) {
    let savedArgs = null,
      isThrottled = false;
  
    return function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        return;
      }
  
      isThrottled = true;
  
      func.apply(null, arguments);
  
      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(null, savedArgs);
          savedArgs = null;
        }
      }, time);
    };
  }
  