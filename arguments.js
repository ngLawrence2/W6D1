function sum1() {
  let arr = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function(ctx) {
  let bind_args = Array.from(arguments);
  bind_args.shift();
  let ctx2 = this;
  return function() {
    let invoke_args = Array.from(arguments);
    ctx2.apply(ctx, bind_args.concat(invoke_args));
  };
};

Function.prototype.myBind2 = function(ctx,...bindArgs) {
  return (...invoke_args) => {
    this.apply(ctx, bindArgs.concat(invoke_args));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  _curriedSum = (num) => {
    numbers.push(num);
    if(numbers.length===numArgs) {
      return numbers.reduce( (accum,reduceNum) => {
        return reduceNum+accum;
      },0);
    }else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curry;
    }
  };
  return _curry;
};

Function.prototype.curry = function(numArgs) {
  let args = [];
  _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(null, args);
    } else {
      return _curry;
    }
  };
  return _curry;
};
