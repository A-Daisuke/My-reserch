const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return eval("(function() { var a = 1; var b = 2; return a+b; })();");
        };
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1(VAR_2);
        }
    }
};