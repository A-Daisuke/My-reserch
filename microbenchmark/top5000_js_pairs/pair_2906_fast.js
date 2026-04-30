const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3 * 2;
        }
        var VAR_6 = 0;
        for (var VAR_7 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_6 += FUNCTION_1(VAR_1[VAR_2]);
        }
    }
};