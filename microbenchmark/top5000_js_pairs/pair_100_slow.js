const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 1;
          while ((VAR_2 - 1) * (VAR_2 - 1) < VAR_1) {
            VAR_2++;
          }
          var VAR_3 = VAR_2;
          for (var VAR_4 = 0; VAR_4 < 3; VAR_4++) {
            VAR_3 = (VAR_1 / VAR_3 + VAR_3) / 2;
          }
          return VAR_3;
        }
        for (var VAR_5 = 0, VAR_6 = 100000; VAR_5 < VAR_6; VAR_5++) {
          FUNCTION_1(VAR_5);
        }
    }
};