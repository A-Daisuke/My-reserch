const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).fill(9);
        VAR_1[50000] = 3;
        function FUNCTION_1(VAR_2) {
          var VAR_3 = VAR_2[0];
          for (var VAR_4 = 1; VAR_4 < VAR_2.length; VAR_4++) {
            if (VAR_2[VAR_4] < VAR_3) {
              VAR_3 = VAR_2[VAR_4];
            }
          }
          return VAR_3;
        }
        FUNCTION_1(VAR_1);
    }
};