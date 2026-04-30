const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_4 = 0;
          var VAR_5 = 1;
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            var VAR_6 = VAR_4 + VAR_5;
            var VAR_7 = VAR_5;
            var VAR_8 = VAR_6;
          }
          return VAR_5;
        };
        FUNCTION_1(500);
    }
};