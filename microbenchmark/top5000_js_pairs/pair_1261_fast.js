const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 < 1) return "";
          var VAR_3 = "";
          while (VAR_2 > 0) {
            if (VAR_2 & 1) VAR_3 += VAR_1;
            (VAR_2 >>= 1), (VAR_1 += VAR_1);
          }
          return VAR_3;
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          return new Array(VAR_5 + 1).join(VAR_4);
        }
        FUNCTION_1("a", 100000);
    }
};