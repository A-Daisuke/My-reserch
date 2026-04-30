const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return Array.prototype.reduce.call(arguments, function (VAR_1, VAR_2) {
            return VAR_1 + VAR_2;
          });
        }
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          FUNCTION_1(1, 2, 3);
        }
    }
};