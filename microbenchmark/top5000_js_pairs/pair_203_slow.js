const Benchmark = {
    run: function() {
        "use strict";
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === 1 || VAR_1 === 2) return 1;
          return FUNCTION_1(VAR_1 - 1) + FUNCTION_1(VAR_1 - 2);
        }
        FUNCTION_1(30);
    }
};