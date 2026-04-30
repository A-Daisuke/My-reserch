const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 <= 1) return VAR_1;
          return FUNCTION_1(VAR_1 - 2) + FUNCTION_1(VAR_1 - 1);
        }
        var VAR_2 = ["First 20 fibonacci numbers:"];
        for (var VAR_3 = 0; VAR_3 < 20; VAR_3++) {
          VAR_2.push(VAR_3, " = ", FUNCTION_1(VAR_3));
        }
        var VAR_4 = VAR_2.join("");
    }
};