const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_2 = [];
        for (VAR_1; VAR_1 > 0; VAR_1--) {
          VAR_2.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          var VAR_6 = VAR_3.length,
            VAR_7 = 0;
          for (VAR_6; VAR_6 > 0; VAR_6--) {
            VAR_7 += VAR_3[VAR_6];
          }
          return VAR_7;
        }
        FUNCTION_1(VAR_2);
    }
};