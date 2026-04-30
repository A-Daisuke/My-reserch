const Benchmark = {
    run: function() {
        var VAR_2 = 0,
          VAR_3 = 10,
          VAR_4,
          VAR_5,
          VAR_6;
        function FUNCTION_1() {
          while (!VAR_6) {
            for (var VAR_7 = 0; VAR_7 < VAR_3; VAR_7++) {
              VAR_4 = VAR_2 * 10 + 6;
              VAR_5 = 6 * VAR_3 + VAR_2;
              if (VAR_5 / VAR_4 == 4) {
                VAR_6 = VAR_4;
              }
              VAR_2++;
            }
            VAR_3 = VAR_3 * 10;
          }
          return VAR_6;
        }
        FUNCTION_1();
    }
};