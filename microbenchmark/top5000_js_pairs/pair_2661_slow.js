const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 + VAR_2;
        }
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          (function (VAR_4) {
            return FUNCTION_1(1, VAR_4);
          })(VAR_3);
        }
    }
};