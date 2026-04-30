const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 <= 0) {
            var VAR_2 = new Error();
            return VAR_2.stack;
          }
          return FUNCTION_1(VAR_1 - 1);
        }
        Error.VAR_3 = Infinity;
        FUNCTION_1(30);
    }
};