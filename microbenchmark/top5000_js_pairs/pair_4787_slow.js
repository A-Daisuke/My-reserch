const Benchmark = {
    run: function() {
        (function () {
          "use strict";
          let FUNCTION_1 = function (VAR_1) {
            this.FUNCTION_2 = function () {
              return VAR_1;
            };
          };
          let VAR_2 = new FUNCTION_1("sascha");
          console.log(VAR_2.FUNCTION_2());
        })();
    }
};