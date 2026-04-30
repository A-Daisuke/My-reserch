const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1001; VAR_2++) {
          VAR_1.push(Math.round(Math.random() * 1000));
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3 * VAR_3;
        }
        var VAR_4 = [];
        for (var VAR_5 in VAR_1) {
          if (VAR_1.hasOwnProperty(VAR_5)) {
            VAR_4.push(FUNCTION_1(VAR_1[VAR_5]));
          }
        }
    }
};