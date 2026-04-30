const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var FUNCTION_1 = function (VAR_3) {
          VAR_1.push(VAR_3);
        };
        var VAR_5 = VAR_1.length - 1;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          var VAR_6 = VAR_2.length;
          for (var VAR_7 = 0; VAR_7 < VAR_6; VAR_7 += 1) {
            VAR_1[VAR_5++] = VAR_2[VAR_7];
          }
        }
    }
};