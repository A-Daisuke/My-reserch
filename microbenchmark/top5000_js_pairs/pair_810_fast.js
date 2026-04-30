const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          function FUNCTION_2(VAR_4, VAR_5) {
            return (((VAR_5 / VAR_4) | 0) / 2) * (VAR_4 + ((VAR_5 / VAR_4) | 0) * VAR_4);
          }
          return FUNCTION_2(3, VAR_1 - 1) + FUNCTION_2(5, VAR_1 - 1) - FUNCTION_2(15, VAR_1 - 1);
        }
        FUNCTION_1(1 * 1000 * 1000);
    }
};