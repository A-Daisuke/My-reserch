const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 * VAR_1 * VAR_1;
        }
        function FUNCTION_2(VAR_2, VAR_3) {
          if (VAR_2.length != 0) {
            for (var VAR_4 = 0; VAR_4 < VAR_2.length; ++VAR_4) {
              VAR_3(VAR_2[VAR_4]);
            }
          } else {
            VAR_2.map(VAR_3);
          }
        }
        function FUNCTION_3(VAR_5, VAR_6) {
          for (var VAR_7 = 0; VAR_7 < VAR_2.length; ++VAR_7) {
            VAR_3(VAR_2[VAR_4]);
          }
        }
        var VAR_8 = [];
        for (var VAR_9 = 0; VAR_9 < 100000; ++VAR_9) {
          VAR_8.push(VAR_9);
        }
        FUNCTION_2(VAR_8, FUNCTION_1);
    }
};