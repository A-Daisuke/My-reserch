const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 && VAR_1.method) {
            VAR_1.method();
          } else {
            return undefined;
          }
        }
        FUNCTION_1();
    }
};