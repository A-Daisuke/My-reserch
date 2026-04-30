const Benchmark = {
    run: function() {
        VAR_1 = 10000;
        function FUNCTION_2(VAR_8) {
          var VAR_9 = 0;
          while (--VAR_8) {
            if (VAR_8 % 5 == 0 || VAR_8 % 3 == 0) {
              VAR_9 = VAR_9 + VAR_8;
            }
          }
          return VAR_9;
        }
        FUNCTION_2(VAR_1);
    }
};