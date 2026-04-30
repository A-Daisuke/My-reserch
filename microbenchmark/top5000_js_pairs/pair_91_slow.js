const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          for (var VAR_2 = 900000; VAR_2 < 1000000; VAR_2++) {
            VAR_1(VAR_2);
          }
        }
        var FUNCTION_2 = function (VAR_3) {
          if (VAR_3 <= 1) {
            return false;
          } else {
            for (var VAR_4 = 2; VAR_4 * VAR_4 <= VAR_3; VAR_4++) {
              if (VAR_3 % VAR_4 <= 0.5) {
                return false;
              }
            }
            return true;
          }
        };
        FUNCTION_1(FUNCTION_2);
    }
};