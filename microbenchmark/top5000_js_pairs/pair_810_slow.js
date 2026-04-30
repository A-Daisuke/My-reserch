const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0,
            VAR_3 = 3;
          for (; VAR_3 <= VAR_1; VAR_3++) {
            if (VAR_3 % 3 === 0 || VAR_3 % 5 === 0) {
              VAR_2 += VAR_3;
            }
          }
          return VAR_2;
        }
        FUNCTION_1(1 * 1000 * 1000);
    }
};