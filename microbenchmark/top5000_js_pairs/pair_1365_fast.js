const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3];
        function FUNCTION_1(VAR_2) {
          if (!Array.isArray(VAR_2)) {
            return null;
          }
          return VAR_2.reduce(function (VAR_6, VAR_7) {
            return VAR_6 + VAR_7;
          }, 0);
        }
        for (var VAR_5 = 0; VAR_5 < 40000; VAR_5++) {
          FUNCTION_1(VAR_1);
        }
    }
};