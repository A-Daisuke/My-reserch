const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 + VAR_2;
        }
        var FUNCTION_3 = function (VAR_8, VAR_9) {
          return VAR_8 + VAR_9;
        };
        var VAR_3 = 1000;
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_3(VAR_4, VAR_4);
        }
    }
};