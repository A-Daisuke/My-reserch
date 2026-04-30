const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_3) {
          return parseInt(VAR_3, 10) + 10;
        };
        function FUNCTION_1(VAR_1, VAR_2) {
          return FUNCTION_2(VAR_1) + FUNCTION_2(VAR_2);
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          FUNCTION_1(VAR_4, VAR_4 + 1);
        }
    }
};