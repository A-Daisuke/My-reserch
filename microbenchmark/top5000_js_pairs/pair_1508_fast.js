const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          return VAR_1 * VAR_2;
        };
        for (VAR_6 = 0; VAR_6 < 100000; VAR_6++) {
          FUNCTION_1(5, 10);
        }
    }
};