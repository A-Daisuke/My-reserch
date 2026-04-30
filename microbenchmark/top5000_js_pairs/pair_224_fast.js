const Benchmark = {
    run: function() {
        var VAR_1 = {};
        function FUNCTION_1(VAR_2) {
          var VAR_3 = VAR_2;
          if (VAR_1[VAR_3]) {
            return VAR_1[VAR_3];
          } else {
            VAR_1[VAR_4] = VAR_2 / 2;
          }
        }
        function FUNCTION_2(VAR_5) {
          return VAR_5 >> 1;
        }
        var VAR_6, VAR_7;
        for (VAR_6 = 0; VAR_6 < 1000000; VAR_6++) {
          VAR_7 = Math.round(Math.random() * 500);
          var VAR_8 = VAR_7 >> 1;
        }
    }
};