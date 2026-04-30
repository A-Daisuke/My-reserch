const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 5000;
        while (VAR_2--) {
          VAR_1[VAR_2 - 1] = VAR_2;
        }
        var FUNCTION_1 = function (VAR_3) {
          VAR_3 = VAR_3;
        };
        var VAR_5 = Object.keys(VAR_1),
          VAR_6 = VAR_5.length,
          VAR_7 = 0;
        for (VAR_7; VAR_7 < VAR_6; VAR_7++) {
          var VAR_8 = VAR_5[VAR_7];
          FUNCTION_1(VAR_1[VAR_8]);
        }
    }
};