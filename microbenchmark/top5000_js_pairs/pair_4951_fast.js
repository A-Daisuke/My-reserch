const Benchmark = {
    run: function() {
        var VAR_1 = 1;
        (function () {
          "use strict";
          function FUNCTION_1(VAR_2, VAR_3) {
            return {
              KEY_1: function () {
                return VAR_2 + " " + VAR_3;
              },
            };
          }
          var VAR_6 = FUNCTION_1("Henk", "de Vries");
          VAR_6.KEY_1();
        })();
    }
};