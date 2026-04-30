const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_3, VAR_4) {
          if (VAR_4 <= 0) return "";
          if (VAR_4 == 1) return VAR_3;
          var VAR_5 = FUNCTION_2(VAR_3, VAR_4 >> 1);
          VAR_5 += VAR_5;
          if (VAR_4 & 1) VAR_5 += VAR_3;
          return VAR_5;
        }
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2 <= 0 ? "" : new Array(VAR_2 + 1).join(VAR_1);
        }
        FUNCTION_2("qweqweqweqweqwe", 10000);
    }
};