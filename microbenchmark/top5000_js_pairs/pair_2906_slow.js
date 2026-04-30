const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3 * 2;
        }
        VAR_1.map(FUNCTION_1).reduce(function (VAR_4, VAR_5) {
          return VAR_4 + VAR_5;
        }, 0);
    }
};