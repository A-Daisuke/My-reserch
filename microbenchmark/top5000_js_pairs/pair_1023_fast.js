const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, Array(50000)).map(function (VAR_2, VAR_3) {
          return VAR_3;
        });
        var FUNCTION_1 = function (VAR_4) {
          return VAR_4;
        };
        for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
          FUNCTION_1(VAR_5);
        }
    }
};