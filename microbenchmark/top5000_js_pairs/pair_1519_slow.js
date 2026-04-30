const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2 += 1) {
          VAR_1.push((Math.random() * 100) | 0);
        }
        function* FUNCTION_1() {
          yield* VAR_1;
        }
        var VAR_3 = 0;
        for (var VAR_4 of FUNCTION_1()) {
          VAR_3 += VAR_4;
        }
    }
};