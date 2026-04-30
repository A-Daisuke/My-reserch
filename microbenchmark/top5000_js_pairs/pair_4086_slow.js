const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === 0) return 0;
          return FUNCTION_1(--VAR_1);
        }
        FUNCTION_1(1000);
    }
};