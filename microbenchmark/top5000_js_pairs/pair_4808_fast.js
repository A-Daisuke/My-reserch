const Benchmark = {
    run: function() {
        (function () {
          var VAR_1, VAR_2;
          function FUNCTION_1(VAR_3) {
            if (VAR_2 !== 0) {
              VAR_1 += ",";
            }
            VAR_1 += VAR_2;
          }
          for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            FUNCTION_1(VAR_2);
          }
        })();
    }
};