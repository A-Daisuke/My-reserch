const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 1,
            VAR_3 = 0,
            VAR_4;
          while (VAR_1 >= 0) {
            VAR_4 = VAR_2;
            VAR_2 = VAR_2 + VAR_3;
            VAR_3 = VAR_4;
            VAR_1--;
          }
          return VAR_3;
        }
        FUNCTION_1(20);
    }
};