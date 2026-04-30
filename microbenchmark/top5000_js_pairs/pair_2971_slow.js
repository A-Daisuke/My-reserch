const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_1 == 0) {
            return 1;
          } else {
            return (VAR_1 / VAR_2) * FUNCTION_1(VAR_1 - 1, VAR_2 - 1);
          }
        }
        FUNCTION_1(2430, 300);
    }
};