const Benchmark = {
    run: function() {
        VAR_1 = 10;
        function FUNCTION_1(VAR_2) {
          var VAR_4 = 1,
            VAR_5 = 1,
            VAR_6;
          if (VAR_2 == 1 || VAR_2 == 2) return 1;
          for (var VAR_7 = 3; VAR_7 <= VAR_2; VAR_7++) {
            VAR_6 = VAR_4 + VAR_5;
            VAR_5 = VAR_4;
            VAR_4 = VAR_6;
          }
          return VAR_4;
        }
        for (var VAR_3 = 1; VAR_3 <= VAR_1; VAR_3++) FUNCTION_1(VAR_1);
    }
};