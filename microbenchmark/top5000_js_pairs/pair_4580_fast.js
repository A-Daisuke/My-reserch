const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          return {
            KEY_1: VAR_1,
            KEY_2: VAR_2,
          };
        };
        for (var VAR_5 = 0; VAR_5 < 100; VAR_5++) {
          FUNCTION_1(VAR_5, VAR_5 + 1);
        }
    }
};