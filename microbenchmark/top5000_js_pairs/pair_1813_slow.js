const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          VAR_1 = VAR_2;
        }
        function FUNCTION_2() {
          try {
            for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
              FUNCTION_1(VAR_3);
            }
          } catch (VAR_4) {}
        }
        FUNCTION_2();
    }
};