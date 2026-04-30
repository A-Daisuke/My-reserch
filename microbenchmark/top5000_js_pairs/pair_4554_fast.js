const Benchmark = {
    run: function() {
        var VAR_1 = 1;
        (function () {
          "use strict";
          function FUNCTION_1(VAR_7, VAR_8) {
            return {
              KEY_3: function () {
                return VAR_7 + " " + VAR_8;
              },
            };
          }
          var VAR_6 = FUNCTION_1("Henk", "de Vries");
          VAR_6.KEY_3();
        })();
    }
};