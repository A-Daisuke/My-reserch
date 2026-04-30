const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          VAR_1(1, 2);
        }
        function FUNCTION_5(VAR_11) {
          FUNCTION_1(function (VAR_4, VAR_5) {
            VAR_6 = VAR_4 + VAR_5;
            VAR_7 = VAR_11;
          });
        }
        for (var VAR_10 = 0; VAR_10 < 10000; ++VAR_10) {
          FUNCTION_5(VAR_10);
        }
    }
};