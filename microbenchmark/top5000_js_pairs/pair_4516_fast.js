const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_1) {
          VAR_2 = VAR_1;
        };
        var FUNCTION_1 = function () {
          FUNCTION_2("asdf");
        };
        var VAR_3;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          FUNCTION_1();
        }
    }
};