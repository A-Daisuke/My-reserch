const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: true };
        var FUNCTION_1 = function () {
          VAR_1.KEY_1 = false;
          FUNCTION_1 = function () {};
        };
        for (var VAR_2 = 0; VAR_2 <= 1000; VAR_2++) {
          FUNCTION_1();
        }
    }
};