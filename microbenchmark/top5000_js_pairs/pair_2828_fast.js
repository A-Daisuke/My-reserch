const Benchmark = {
    run: function() {
        var FUNCTION_2 = function () {};
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          ({
            KEY_1: 1,
            KEY_2: "string",
            KEY_3: FUNCTION_2,
          });
        }
    }
};