const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 100000;
        var FUNCTION_2 = function () {
          VAR_1++;
        };
        while (VAR_1 < VAR_2) {
          FUNCTION_2();
        }
    }
};