const Benchmark = {
    run: function() {
        "use strict";
        var VAR_1 = FUNCTION_1(100);
        var VAR_2 = FUNCTION_1(10000);
        var VAR_3 = FUNCTION_1(1000000);
        function FUNCTION_2() {
          "use strict";
        }
        function FUNCTION_1(VAR_4) {
          "use strict";
          var VAR_5 = [];
          for (let VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) VAR_5.push(VAR_6);
          return VAR_5;
        }
        ("use strict");
        for (var VAR_7 of VAR_3) {
          FUNCTION_2();
        }
    }
};