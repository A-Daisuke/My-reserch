const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2) {
          if (VAR_2 === 0) return 0;
          return VAR_2 + FUNCTION_2(VAR_2 - 1);
        }
        FUNCTION_2(100);
    }
};