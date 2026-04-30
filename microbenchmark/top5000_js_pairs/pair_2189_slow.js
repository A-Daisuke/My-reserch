const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        function FUNCTION_1() {
          "use strict";
          for (let VAR_2 of VAR_1) {
            let VAR_3 = VAR_1[VAR_2] + 1;
          }
        }
        function FUNCTION_2() {
          "use strict";
          for (let VAR_4 = -1, VAR_5 = VAR_1.length; ++VAR_4 < VAR_5; ) {
            let VAR_6 = VAR_1[VAR_4] + 1;
          }
        }
        FUNCTION_1();
    }
};