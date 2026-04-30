const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          function FUNCTION_1(VAR_2) {
            VAR_1 += VAR_2;
          }
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            FUNCTION_1("Quick ");
            FUNCTION_1(VAR_3);
            FUNCTION_1(" fox ");
            FUNCTION_1(VAR_3);
            FUNCTION_1(" over the ");
            FUNCTION_1(VAR_3);
            FUNCTION_1(" dog. ");
          }
        })();
    }
};