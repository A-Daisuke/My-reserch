const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          "use strict";
          let VAR_1 = 10000;
          let VAR_2 = 0;
          let FUNCTION_2 = function (VAR_4) {
            return VAR_4 + 1;
          };
          for (let VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 = FUNCTION_2(VAR_2);
          }
        }
        FUNCTION_1();
    }
};