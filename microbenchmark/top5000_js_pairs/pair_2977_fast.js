const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1001; VAR_2++) {
          VAR_1.push(Math.round(Math.random() * 1000));
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3 * VAR_3;
        }
        VAR_1.map(FUNCTION_1);
    }
};