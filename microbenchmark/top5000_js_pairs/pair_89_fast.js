const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          return VAR_4.reduce(function (VAR_1, VAR_2) {
            return VAR_1 + VAR_2;
          });
        }
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          FUNCTION_2([1, 2, 3]);
        }
    }
};