const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 <= 0) return "";
          if (VAR_2 == 1) return VAR_1;
          var VAR_7 = FUNCTION_1(VAR_1, VAR_2 >> 1);
          VAR_7 += VAR_7;
          if (VAR_2 & 1) VAR_7 += VAR_1;
          return VAR_7;
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          var VAR_5 = VAR_3;
          for (var VAR_6 = 0; VAR_6 < VAR_4 - 1; VAR_6++) VAR_5 += VAR_3;
          return VAR_5;
        }
        FUNCTION_1("qweqweqweqweqwe", 10000);
    }
};