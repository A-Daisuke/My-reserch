const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          "use strict";
          if (VAR_1 <= 1) return 1;
          else return VAR_1 * FUNCTION_1(VAR_1 - 1);
        }
        for (let VAR_4 = 0; VAR_4 < 30; VAR_4++) {
          FUNCTION_1(VAR_4);
        }
    }
};