const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3, VAR_4) {
          return VAR_1 + VAR_2 + VAR_3 + VAR_4;
        }
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          VAR_6 = FUNCTION_1.call(null, 1, 2, 3, 4);
        }
    }
};