const Benchmark = {
    run: function() {
        var VAR_1 = Array(1000);
        var VAR_2 = Array(1000);
        var FUNCTION_1 = function (VAR_3) {
          return VAR_3 * 2;
        };
        var VAR_4 = VAR_1.map(FUNCTION_1);
    }
};