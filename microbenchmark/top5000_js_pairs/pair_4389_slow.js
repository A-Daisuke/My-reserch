const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          try {
            VAR_1.method();
          } catch (VAR_2) {
            return undefined;
          }
        }
        FUNCTION_1();
    }
};