const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3);
        }
        var FUNCTION_1 = function (VAR_4, VAR_5) {
          return VAR_4 === VAR_2[VAR_3];
        };
        VAR_1.every(FUNCTION_1);
    }
};