const Benchmark = {
    run: function() {
        FUNCTION_2 = function (VAR_5) {
          var VAR_6;
          for (var VAR_7 = 0; VAR_7 < VAR_5; ) {
            VAR_6 += VAR_7++;
            VAR_6 += VAR_7++;
            VAR_6 += VAR_7++;
          }
          return VAR_6;
        };
        FUNCTION_2(9999);
    }
};