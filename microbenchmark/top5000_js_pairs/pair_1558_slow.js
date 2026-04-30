const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3];
        function FUNCTION_1(VAR_2) {
          var VAR_3 = 0;
          if (!VAR_2) return null;
          VAR_2.map(function (VAR_4) {
            VAR_3 += VAR_4;
          });
          return VAR_3;
        }
        for (var VAR_5 = 0; VAR_5 < 40000; VAR_5++) {
          FUNCTION_1(VAR_1);
        }
    }
};