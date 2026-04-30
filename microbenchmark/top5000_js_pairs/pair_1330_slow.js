const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_2) {
          return VAR_2.KEY_1 + VAR_2.KEY_1;
        }
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push({ KEY_1: VAR_3 });
        }
        var VAR_4,
          VAR_5 = VAR_1.slice();
        while ((VAR_4 = VAR_5.shift())) {
          FUNCTION_1(VAR_4);
        }
    }
};