const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          for (VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
            VAR_1(VAR_3);
          }
        }
        (function () {
          function FUNCTION_4(VAR_7) {
            var VAR_8 = 234 % VAR_7;
            function FUNCTION_5(VAR_9, VAR_10) {
              return VAR_9 + VAR_10;
            }
            FUNCTION_5(VAR_7, VAR_8);
          }
          FUNCTION_1(FUNCTION_4);
        })();
    }
};