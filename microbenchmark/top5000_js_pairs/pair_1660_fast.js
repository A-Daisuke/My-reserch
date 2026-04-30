const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [];
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
            VAR_1.push(Math.random());
          }
          return VAR_1;
        }
        var VAR_3 = FUNCTION_1();
        var VAR_7 = -Infinity;
        var VAR_8 = VAR_3.VAR_8;
        for (var VAR_9 = 0; VAR_9 < VAR_8; VAR_9++) {
          VAR_7 = VAR_3[VAR_2] > VAR_7 ? VAR_3[VAR_2] : VAR_7;
        }
    }
};