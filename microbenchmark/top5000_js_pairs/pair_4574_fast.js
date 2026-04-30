const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            if (VAR_3 - 30 > VAR_2) {
              VAR_2 = VAR_3 + 30;
            }
          }
        };
        FUNCTION_1(8000);
    }
};