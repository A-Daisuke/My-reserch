const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_10, VAR_11, VAR_12) {
          var VAR_13 = {
            KEY_5: VAR_10,
            KEY_6: VAR_11,
            KEY_7: VAR_12,
          };
          VAR_13.FUNCTION_2 = function () {};
          VAR_13.FUNCTION_3 = function () {};
          VAR_13.FUNCTION_4 = function () {};
          return VAR_13;
        }
        var VAR_14 = FUNCTION_1(777, "str", {});
    }
};