const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.random() < 0.5);
        function FUNCTION_2() {
          "use strict";
          VAR_1.sort((VAR_5, VAR_6) => Number(VAR_5) - Number(VAR_6));
        }
        VAR_1.sort((VAR_7, VAR_8) => VAR_7 - VAR_8);
    }
};