const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = [0, 1, 1];
          return VAR_2[VAR_1 - 1]
            ? VAR_2[VAR_1 - 1]
            : FUNCTION_1(VAR_1 - 1) + FUNCTION_1(VAR_1 - 2);
        };
        FUNCTION_1(25);
    }
};