const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        function FUNCTION_1(VAR_2) {
          VAR_2 = VAR_2 || 0;
          var VAR_3;
          try {
            for (VAR_3 = VAR_2; VAR_3 < VAR_1; ++VAR_3) {
              window.VAR_4 = Math.random();
              throw new Error("test error");
            }
          } catch (VAR_5) {
            var VAR_6 = VAR_5.stack;
            FUNCTION_2(VAR_3 + 1);
          }
        }
        function FUNCTION_2(VAR_7) {
          FUNCTION_1(VAR_7);
        }
        FUNCTION_1();
    }
};