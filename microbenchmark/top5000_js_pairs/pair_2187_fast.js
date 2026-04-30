const Benchmark = {
    run: function() {
        var VAR_4 = "First 2k squares: ";
        function FUNCTION_1(VAR_5, VAR_6) {
          return VAR_5 + " = " + VAR_5 * VAR_5 + " ";
        }
        for (var VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
          VAR_4 += FUNCTION_1(VAR_2, VAR_4);
        }
    }
};