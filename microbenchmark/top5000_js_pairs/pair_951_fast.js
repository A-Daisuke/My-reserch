const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4, VAR_5, VAR_6) {
          return VAR_4 + VAR_5 + VAR_6;
        }
        var VAR_10 = FUNCTION_2.bind(null, 3, 4);
        var VAR_8 = 0;
        for (var VAR_9 = 0; VAR_9 < 5000; VAR_9++) {
          VAR_8 += VAR_10(VAR_9);
        }
    }
};