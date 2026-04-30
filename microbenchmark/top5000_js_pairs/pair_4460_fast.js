const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          if (VAR_4 <= 1) return 1;
          return VAR_4 / 2 + FUNCTION_2(VAR_4 - 1);
        }
        FUNCTION_2(1000);
    }
};