const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          while (VAR_2 > 0) {
            VAR_3 += VAR_1;
            VAR_2--;
          }
          return VAR_3;
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          if (VAR_5 < 1) return "";
          var VAR_6 = "";
          while (VAR_5 > 0) {
            if (VAR_5 & 1) VAR_6 += VAR_4;
            (VAR_5 >>= 1), (VAR_4 += VAR_4);
          }
          return VAR_6;
        }
        FUNCTION_2("a", 100000);
    }
};