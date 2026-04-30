const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 30;
        var FUNCTION_1 = function (VAR_3) {
          return VAR_3 < 1 ? (VAR_3 == 0 ? 0 : NaN) : VAR_3 < 3 ? 1 : FUNCTION_1(--VAR_3) + FUNCTION_1(--VAR_3);
        };
        for (var VAR_4 = VAR_1; VAR_4 < VAR_2; VAR_4++) {
          FUNCTION_1(VAR_4);
        }
    }
};