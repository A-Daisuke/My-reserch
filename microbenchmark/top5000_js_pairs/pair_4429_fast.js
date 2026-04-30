const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          "use strict";
          let VAR_2 = 1;
          let VAR_3 = 1;
          while (VAR_3 <= VAR_1) {
            VAR_2 = VAR_2 * VAR_3;
            VAR_3++;
          }
          return VAR_2;
        }
        FUNCTION_1(470);
    }
};