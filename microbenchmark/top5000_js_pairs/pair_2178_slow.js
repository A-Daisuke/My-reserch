const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var FUNCTION_1 = function () {
          return VAR_1[VAR_2];
        };
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          for (var VAR_4 = 0; VAR_4 < 10; VAR_4++) {
            var VAR_2 = FUNCTION_1(VAR_4);
          }
        }
    }
};