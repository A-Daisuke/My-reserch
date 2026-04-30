const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          var VAR_3 = VAR_1 + "";
          while (VAR_3.length < VAR_2) VAR_3 = "0" + VAR_3;
          return VAR_3;
        };
        for (var VAR_4 = 2; VAR_4 < 100; VAR_4++) {
          FUNCTION_1(42, VAR_4);
        }
    }
};