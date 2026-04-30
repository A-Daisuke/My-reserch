const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          return Array.prototype.reduce.call(arguments, function (VAR_1, VAR_2) {
            return VAR_1 + VAR_2;
          });
        };
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          FUNCTION_1(1, 2, 3);
        }
    }
};