const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            var FUNCTION_2 = function (VAR_4) {
              return VAR_4 * VAR_4;
            };
            VAR_2 += FUNCTION_2(VAR_3);
          }
        };
        FUNCTION_1(150000);
    }
};