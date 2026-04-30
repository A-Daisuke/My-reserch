const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_5) {
          var VAR_6 = 0;
          var VAR_7,
            VAR_8 = 1,
            VAR_9 = 2;
          while (VAR_9 < VAR_5) {
            if (VAR_9 % 2 == 0) {
              VAR_6 += VAR_9;
            }
            VAR_7 = VAR_8;
            VAR_8 = VAR_9;
            VAR_9 += VAR_7;
          }
          return VAR_6;
        }
        FUNCTION_1(4000000);
    }
};