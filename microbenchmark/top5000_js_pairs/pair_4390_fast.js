const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 + VAR_2;
        }
        var FUNCTION_2 = function (VAR_5, VAR_6) {
          return VAR_5 + VAR_6;
        };
        var VAR_3 = 1000;
        var VAR_4 = 0;
        for (var VAR_7 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_2(VAR_4, VAR_4);
        }
    }
};