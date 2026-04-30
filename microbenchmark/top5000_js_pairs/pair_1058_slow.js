const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          for (var VAR_1 = 1; VAR_1 > 0; VAR_1++) {
            if ((+VAR_1 + "6") * 4 == "6" + VAR_1) {
              return VAR_1;
            }
          }
        }
        FUNCTION_1();
    }
};