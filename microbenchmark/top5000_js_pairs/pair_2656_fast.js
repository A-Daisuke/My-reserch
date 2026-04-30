const Benchmark = {
    run: function() {
        "use strict";
        function FUNCTION_1(VAR_1) {
          return parseInt(VAR_1, 10);
        }
        var VAR_2 = [];
        var VAR_3 = 1000;
        while (VAR_3--) {
          VAR_2.push(
            Math.random()
              .toString()
              .substr(3, (1 + 4 * Math.random()) >> 0) + "px",
          );
        }
        VAR_2.map(FUNCTION_1);
    }
};