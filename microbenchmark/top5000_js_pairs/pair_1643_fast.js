const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 25000; ++VAR_2) {
          VAR_1.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          var VAR_7 = 0;
          var VAR_8 = VAR_3.length;
          for (var VAR_9 = 1; VAR_2 < VAR_8; VAR_2++) {
            if (VAR_3[VAR_2] < VAR_3[VAR_7]) VAR_7 = VAR_2;
          }
          return VAR_7;
        }
        FUNCTION_1(VAR_1);
    }
};