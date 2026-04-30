const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          for (VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
            VAR_1(VAR_3);
          }
        }
        (function () {
          var VAR_4;
          function FUNCTION_2(VAR_5) {
            return VAR_5 + VAR_4;
          }
          function FUNCTION_3(VAR_6) {
            VAR_4 = 234 % VAR_6;
            FUNCTION_2(VAR_6);
          }
          FUNCTION_1(FUNCTION_3);
        })();
    }
};