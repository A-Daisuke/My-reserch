const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return VAR_1 == 0 || VAR_1 == 1 ? VAR_1 : FUNCTION_1(VAR_1 - 1) + FUNCTION_1(VAR_1 - 2);
        };
        var FUNCTION_2 = function (VAR_2) {
          return Math.round(Math.pow((Math.sqrt(5) + 1) / 2, VAR_1) / Math.sqrt(5));
        };
        FUNCTION_1(20);
    }
};