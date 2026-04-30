const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_1 === 1 || VAR_2 === 1) return 1;
          else return FUNCTION_1(VAR_1 - 1, VAR_2) + FUNCTION_1(VAR_1, VAR_2 - 1);
        }
        FUNCTION_1(8, 8);
    }
};