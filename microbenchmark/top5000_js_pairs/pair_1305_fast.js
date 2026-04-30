const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          for (VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
            VAR_1(VAR_3);
          }
        }
        (function () {
          function FUNCTION_4(VAR_8, VAR_9) {
            return VAR_8 + VAR_9;
          }
          function FUNCTION_2(VAR_4) {
            var VAR_5 = 234 % VAR_4;
            FUNCTION_4(VAR_4, VAR_5);
          }
          FUNCTION_1(FUNCTION_2);
        })();
    }
};