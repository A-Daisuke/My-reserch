const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var FUNCTION_1 = function () {};
        var FUNCTION_2 = function (VAR_2) {
          console.FUNCTION_2(VAR_1);
        };
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          FUNCTION_1();
          FUNCTION_1();
        }
    }
};