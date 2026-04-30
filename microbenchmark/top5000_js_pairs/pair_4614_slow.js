const Benchmark = {
    run: function() {
        (function () {
          "use strict";
          let FUNCTION_1 = function (VAR_1 = "world") {
            if (!this) {
              let VAR_2 = {};
              FUNCTION_1.apply(VAR_2, arguments);
              return VAR_2;
            }
            this.FUNCTION_2 = function (VAR_3) {
              if (!VAR_3) {
                return `hello, my name is ${VAR_1}`;
              } else {
                return `hello, ${VAR_3}`;
              }
            };
          };
          let VAR_4 = new FUNCTION_1("x");
          console.log(VAR_4.FUNCTION_2());
          console.log(VAR_4.FUNCTION_2("y"));
        })();
    }
};