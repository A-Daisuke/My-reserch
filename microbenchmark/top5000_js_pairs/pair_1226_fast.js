const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4, VAR_5) {
          var VAR_6 = "";
          while (VAR_5 > 0) {
            VAR_6 += VAR_4;
            VAR_5--;
          }
          return VAR_6;
        }
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 < 1) return "";
          var VAR_3 = "";
          while (VAR_2 > 0) {
            if (VAR_2 & 1) VAR_3 += VAR_1;
            (VAR_2 >>= 1), (VAR_1 += VAR_1);
          }
          return VAR_3;
        }
        FUNCTION_2("a", 100000);
    }
};