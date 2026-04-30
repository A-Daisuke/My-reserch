const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          "use strict";
          let VAR_5 = 1;
          let VAR_6 = 1;
          while (VAR_6 <= VAR_4) {
            VAR_5 = VAR_5 * VAR_6;
            VAR_6++;
          }
          return VAR_5;
        }
        FUNCTION_2(470);
    }
};