const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return {
            KEY_5: VAR_1.KEY_5,
            KEY_6: VAR_1.KEY_6,
            KEY_7: VAR_1.KEY_7,
            KEY_8: VAR_1.KEY_8,
          };
        };
        var VAR_6 = FUNCTION_1({
          KEY_1: "Bob",
          KEY_2: "53",
          KEY_3: "70",
          KEY_4: "180",
        });
    }
};