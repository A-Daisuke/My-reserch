const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          for (VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
            VAR_1(VAR_3);
          }
        }
        (function () {
          function FUNCTION_2(VAR_5, VAR_7) {
            return VAR_5 + VAR_7;
          }
          function FUNCTION_3(VAR_6) {
            var VAR_8 = 234 % VAR_6;
            FUNCTION_2(VAR_6, VAR_8);
          }
          FUNCTION_1(FUNCTION_3);
        })();
    }
};