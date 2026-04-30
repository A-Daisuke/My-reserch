const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return {
            KEY_9: VAR_1.KEY_9,
            KEY_10: VAR_1.KEY_10,
            KEY_11: VAR_1.KEY_11,
            KEY_12: VAR_1.KEY_12,
          };
        };
        var VAR_6 = FUNCTION_1({
          KEY_13: "Bob",
          KEY_14: "53",
          KEY_15: "70",
          KEY_16: "180",
        });
    }
};