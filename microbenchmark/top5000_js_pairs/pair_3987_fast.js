const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return (VAR_1 * (VAR_1 + 1)) / 2;
        }
        FUNCTION_1(1000);
    }
};