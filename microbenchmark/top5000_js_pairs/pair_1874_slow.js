const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.random() < 0.5);
        function FUNCTION_1() {
          VAR_1.sort((VAR_3, VAR_4) => Number(VAR_3) - Number(VAR_4));
        }
        function FUNCTION_2() {
          "use strict";
          VAR_1.sort((VAR_5, VAR_6) => Number(VAR_5) - Number(VAR_6));
        }
        FUNCTION_1();
    }
};