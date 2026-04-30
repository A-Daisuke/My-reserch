const Benchmark = {
    run: function() {
        var VAR_1 = [null, 2, 1];
        function FUNCTION_1(VAR_2) {
          return VAR_1[VAR_2] || 0;
        }
        var VAR_3 = 10000;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_1(VAR_4 & 3);
        }
    }
};