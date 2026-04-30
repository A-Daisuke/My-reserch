const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          return "this" + "-" + "has" + "-" + "value";
        };
        for (var VAR_1 = "", VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          FUNCTION_1();
        }
    }
};