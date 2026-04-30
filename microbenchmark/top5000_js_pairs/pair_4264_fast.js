const Benchmark = {
    run: function() {
        "use strict";
        const VAR_1 = Array.from(Array(100).keys());
        const FUNCTION_2 = (VAR_2) => {
          if (VAR_2 % 3 === 0) {
            return "Fizz";
          } else if (VAR_2 % 5 === 0) {
            return "Buzz";
          } else if (VAR_2 % 3 === 0 && VAR_2 % 5 === 0) {
            return "FizzBuzz";
          } else {
            return "";
          }
        };
        VAR_1.map((VAR_7) => FUNCTION_2(VAR_7));
    }
};