const Benchmark = {
    run: function() {
        var VAR_6 = "First 2k squares: ";
        function FUNCTION_1(VAR_2, VAR_3) {
          return VAR_2 + " = " + VAR_2 * VAR_2 + " ";
        }
        for (var VAR_4 = 0; VAR_4 < 2000; VAR_4++) {
          VAR_6 += FUNCTION_1(VAR_4, VAR_6);
        }
    }
};