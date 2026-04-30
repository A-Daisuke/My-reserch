const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push(VAR_2 % 391);
        }
        function FUNCTION_1(VAR_3) {
          console.log(VAR_3);
        }
        function FUNCTION_2(VAR_4) {
          var VAR_8 = {},
            VAR_9 = [];
          for (var VAR_10 = 0, VAR_11 = VAR_4.length; VAR_2 < VAR_11; ++VAR_2) {
            if (VAR_8.hasOwnProperty(VAR_4[VAR_2])) {
              continue;
            }
            VAR_3.push(VAR_4[VAR_2]);
            VAR_8[VAR_4[VAR_12]] = 1;
          }
          return VAR_9;
        }
        FUNCTION_1(FUNCTION_2(VAR_1));
    }
};