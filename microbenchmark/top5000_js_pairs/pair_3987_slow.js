const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return 0 === VAR_1 ? 0 : VAR_1 + FUNCTION_1(VAR_1 - 1);
        }
        FUNCTION_1(1000);
    }
};