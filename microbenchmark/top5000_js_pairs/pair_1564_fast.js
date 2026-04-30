const Benchmark = {
    run: function() {
        var FUNCTION_3 = function (VAR_6, VAR_7) {
          var VAR_8 = {
            KEY_6: VAR_7(VAR_6),
            KEY_7: VAR_6 > 0 && VAR_6 % 2 === 0 ? FUNCTION_3(VAR_6 - 1, VAR_7) : null,
            KEY_8: VAR_6 > 0 ? FUNCTION_3(VAR_6 - 1, VAR_7) : null,
          };
          return VAR_8;
        };
        function FUNCTION_2(VAR_5) {
          return VAR_5;
        }
        FUNCTION_3(28, FUNCTION_2);
    }
};