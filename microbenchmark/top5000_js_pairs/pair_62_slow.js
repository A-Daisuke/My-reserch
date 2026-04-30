const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        function FUNCTION_1(VAR_3) {
          return VAR_3 * VAR_3 + VAR_3;
        }
        for (VAR_2 = 0; VAR_2 < 10000000; VAR_2 += 1) {
          VAR_1[1] = FUNCTION_1(VAR_2);
        }
    }
};