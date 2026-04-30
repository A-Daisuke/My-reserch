const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          while (VAR_1--) {}
        }
        FUNCTION_1(1000);
    }
};