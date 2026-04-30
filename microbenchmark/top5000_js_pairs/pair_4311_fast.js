const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4, VAR_5) {
          var VAR_6 = "";
          while (VAR_5) {
            if (VAR_5 & 1) {
              VAR_6 += VAR_4;
            }
            if ((VAR_5 >>= 1)) {
              VAR_4 += VAR_4;
            }
          }
          return VAR_6;
        }
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          while (VAR_2--) {
            VAR_3 += VAR_1;
          }
          return VAR_3;
        }
        FUNCTION_2("123123", 1000);
    }
};