const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_1) => {
          if (VAR_1 < 3) {
            return VAR_1;
          }
          return FUNCTION_1(VAR_1 - 1) + (2 * FUNCTION_1(VAR_1 - 2) + 3 * FUNCTION_1(VAR_1 - 3));
        };
        FUNCTION_1(25);
    }
};