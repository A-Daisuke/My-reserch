const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 25000; ++VAR_2) {
          VAR_1.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          var VAR_4 = 0;
          var VAR_5 = VAR_3[VAR_4];
          var VAR_6 = VAR_3.length;
          for (var VAR_7 = 1; VAR_2 < VAR_6; VAR_2++) {
            if (VAR_3[VAR_2] < VAR_5) {
              VAR_5 = VAR_3[VAR_2];
              VAR_4 = VAR_2;
            }
          }
          return VAR_4;
        }
        FUNCTION_1(VAR_1);
    }
};