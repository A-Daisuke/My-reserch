const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2 % 3);
        }
        function FUNCTION_1(VAR_3, VAR_4) {
          return 1 - Math.abs(Math.sign(VAR_3 - VAR_4));
        }
        function FUNCTION_2(VAR_5) {
          return 1 * FUNCTION_1(VAR_5, 0) + 2 * FUNCTION_1(VAR_5, 1) + 3 * FUNCTION_1(VAR_5, 2);
        }
        for (var VAR_6 = 0; VAR_6 < VAR_1.length; VAR_6++) {
          FUNCTION_2(VAR_1[VAR_6]);
        }
    }
};