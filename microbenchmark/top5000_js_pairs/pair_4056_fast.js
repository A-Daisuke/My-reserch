const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_5, VAR_6) {
          for (var VAR_7 = 0, VAR_8 = VAR_5.length; VAR_7 < VAR_8; VAR_7++) {
            VAR_6(VAR_5[VAR_7]);
          }
        }
        var VAR_1 = [];
        !(function () {
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1.push(Math.random());
          }
        })();
        !(function () {
          "use strict";
          var VAR_3 = 0;
          FUNCTION_1(VAR_1, function (VAR_4) {
            VAR_3 += VAR_4;
          });
        })();
    }
};