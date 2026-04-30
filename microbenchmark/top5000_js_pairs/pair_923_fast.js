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
        for (var VAR_6 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          for (var VAR_7 = 0; VAR_7 < VAR_1[VAR_2].length; VAR_7++) {
            FUNCTION_1(VAR_1[VAR_2][VAR_7]);
          }
        }
    }
};