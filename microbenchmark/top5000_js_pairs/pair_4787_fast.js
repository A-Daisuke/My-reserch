const Benchmark = {
    run: function() {
        (function () {
          "use strict";
          let FUNCTION_1 = function (VAR_1) {
            let VAR_3 = {
              KEY_1: function () {
                return VAR_1;
              },
            };
            return Object.assign({}, VAR_3);
          };
          let VAR_2 = FUNCTION_1("sascha");
          console.log(VAR_2.KEY_1());
        })();
    }
};