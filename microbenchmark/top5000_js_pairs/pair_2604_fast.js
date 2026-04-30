const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = -1,
            VAR_3 = 1,
            VAR_4 = 0,
            VAR_5;
          for (; VAR_4 <= VAR_1; ++VAR_4) {
            VAR_5 = VAR_3 + VAR_2;
            VAR_2 = VAR_3;
            VAR_3 = VAR_5;
          }
          return VAR_3;
        }
        FUNCTION_1(18);
    }
};