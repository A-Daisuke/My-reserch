const Benchmark = {
    run: function() {
        var VAR_4, VAR_5;
        function FUNCTION_1(VAR_3) {
          return VAR_3 * VAR_3 + VAR_3;
        }
        for (VAR_4 = 0; VAR_4 < 10000000; VAR_4 += 1) {
          VAR_5 = FUNCTION_1(VAR_4);
        }
    }
};