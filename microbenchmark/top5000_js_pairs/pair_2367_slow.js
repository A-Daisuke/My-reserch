const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: VAR_2 * 2,
            KEY_3: VAR_2 * 3,
          });
        }
        var VAR_3 = 0;
        function FUNCTION_1(VAR_4) {
          VAR_3 += VAR_4;
        }
        for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          FUNCTION_1(VAR_1[VAR_2].KEY_1);
        }
    }
};