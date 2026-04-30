const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          while (VAR_2-- > 0) VAR_1++;
          return VAR_1;
        }
        FUNCTION_1(42, 50000);
    }
};