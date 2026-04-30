const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          var VAR_3 = [].slice.call(arguments, 2);
          return function () {
            return VAR_1.apply(VAR_2, VAR_3.concat([].slice.call(arguments)));
          };
        };
        function FUNCTION_2(VAR_4, VAR_5, VAR_6) {
          return VAR_4 + VAR_5 + VAR_6;
        }
        var VAR_7 = FUNCTION_1(FUNCTION_2, null, 3, 4);
        var VAR_8 = 0;
        for (var VAR_9 = 0; VAR_9 < 5000; VAR_9++) {
          VAR_8 += VAR_7(VAR_9);
        }
    }
};