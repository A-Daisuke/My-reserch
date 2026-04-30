const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          function FUNCTION_1(VAR_3) {
            VAR_1 = VAR_1.concat(VAR_3);
          }
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            FUNCTION_1("Quick ");
            FUNCTION_1(VAR_2);
            FUNCTION_1(" fox ");
            FUNCTION_1(VAR_2);
            FUNCTION_1(" over the ");
            FUNCTION_1(VAR_2);
            FUNCTION_1(" dog. ");
          }
        })();
    }
};