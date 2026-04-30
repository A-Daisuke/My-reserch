const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          while (true) {
            if (VAR_2 & 1) {
              VAR_3 += VAR_1;
            }
            VAR_2 >>= 1;
            if (VAR_2) {
              VAR_1 += VAR_1;
            } else {
              break;
            }
          }
          return VAR_3;
        }
        FUNCTION_1("-=", 10000);
    }
};