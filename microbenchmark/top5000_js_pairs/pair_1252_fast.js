const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1 += FUNCTION_1(VAR_2);
        }
        function FUNCTION_1(VAR_4) {
          return VAR_2 * VAR_2;
        }
    }
};