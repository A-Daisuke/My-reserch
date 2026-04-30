const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          "use strict";
          var VAR_1 = 10000;
          var VAR_2 = 0;
          var FUNCTION_2 = function () {
            VAR_2++;
          };
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            FUNCTION_2();
          }
        }
        FUNCTION_1();
    }
};