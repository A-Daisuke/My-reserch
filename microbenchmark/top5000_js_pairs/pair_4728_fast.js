const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_12, VAR_13, VAR_14) {
          return {
            KEY_1: VAR_12,
            KEY_2: VAR_13,
            KEY_3: VAR_14,
          };
        };
        var VAR_15 = FUNCTION_2(1, null, 6);
        var VAR_16 = FUNCTION_2();
        var VAR_17 = FUNCTION_2(null, null, 6);
        var VAR_18 = FUNCTION_2("test");
        var VAR_19 = FUNCTION_2("1, 2, 3, 4");
    }
};