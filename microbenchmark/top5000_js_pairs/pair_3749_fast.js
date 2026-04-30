const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_7) {
          var VAR_8 = [0, 1];
          for (var VAR_4 = 1; VAR_4 < VAR_7; VAR_4++) {
            VAR_8[0] += VAR_8[1];
            VAR_8.reverse();
          }
          return VAR_8[1];
        };
        FUNCTION_2(100);
    }
};