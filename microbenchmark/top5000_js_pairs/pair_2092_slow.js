const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        FUNCTION_1 = function (VAR_2) {
          VAR_2();
        };
        FUNCTION_2 = function () {
          VAR_1++;
        };
        while (VAR_1 < 1000000) {
          FUNCTION_1(FUNCTION_2);
        }
    }
};