const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          "use strict";
          if (VAR_1 <= 1) return VAR_2(1);
          else return FUNCTION_1(VAR_1 - 1, (VAR_3) => VAR_2(VAR_1 * VAR_3));
        }
        for (let VAR_4 = 0; VAR_4 < 30; VAR_4++) {
          FUNCTION_1(VAR_4, (VAR_5) => VAR_5);
        }
    }
};