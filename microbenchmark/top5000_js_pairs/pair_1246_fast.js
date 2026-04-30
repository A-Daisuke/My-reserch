const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          for (VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
            VAR_1(VAR_3);
          }
        }
        (function () {
          var VAR_5;
          function FUNCTION_3(VAR_6) {
            return VAR_6 + VAR_5;
          }
          function FUNCTION_2(VAR_4) {
            VAR_5 = 234 % VAR_4;
            FUNCTION_3(VAR_4);
          }
          FUNCTION_1(FUNCTION_2);
        })();
    }
};