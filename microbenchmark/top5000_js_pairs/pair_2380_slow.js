const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2 <= 0 ? "" : new Array(VAR_2 + 1).join(VAR_1);
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          var VAR_5 = VAR_3;
          for (var VAR_6 = 0; VAR_6 < VAR_4 - 1; VAR_6++) VAR_5 += VAR_3;
          return VAR_5;
        }
        FUNCTION_1("qweqweqweqweqwe", 10000);
    }
};