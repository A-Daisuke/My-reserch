const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 <= 1) return VAR_1;
          return FUNCTION_1(VAR_1 - 2) + FUNCTION_1(VAR_1 - 1);
        }
        var VAR_2 = "First 20 Fibonacci Numbers";
        for (var VAR_3 = 0; VAR_3 < 20; VAR_3++) {
          VAR_2 += VAR_3 + " = " + FUNCTION_1(VAR_3) + "";
        }
    }
};