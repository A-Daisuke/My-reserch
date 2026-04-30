const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return ((1 + VAR_1) / 2) * VAR_1;
        }
        FUNCTION_1(25000);
    }
};