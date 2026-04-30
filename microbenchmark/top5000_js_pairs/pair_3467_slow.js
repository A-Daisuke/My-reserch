const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, "6", "7", 8, 9, [10]];
        var VAR_2 = [];
        function FUNCTION_1(VAR_3) {
          VAR_2.push(VAR_3 * 10);
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          FUNCTION_1(VAR_1[VAR_4 % VAR_1.length]);
        }
    }
};