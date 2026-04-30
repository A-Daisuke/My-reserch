const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 % 2) {
            throw new Error("Fail!");
          }
        }
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          try {
            FUNCTION_1(VAR_3);
          } catch (VAR_4) {
            VAR_2++;
          }
        }
    }
};