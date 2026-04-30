const Benchmark = {
    run: function() {
        "use strict";
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          VAR_1.push([1, 2, 3, 4, 5]);
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3 * VAR_3;
        }
        ("use strict");
        VAR_1.forEach(function (VAR_4) {
          VAR_4.forEach(function (VAR_5) {
            FUNCTION_1(VAR_5);
          });
        });
    }
};