const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var FUNCTION_1 = function (VAR_3) {
            return VAR_3 + 1;
          };
          VAR_1 = FUNCTION_1(VAR_1);
        }
        console.log(VAR_1);
    }
};