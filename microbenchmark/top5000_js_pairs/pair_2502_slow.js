const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 == 1000) throw VAR_1;
          return FUNCTION_1(VAR_1 + 1);
        }
        try {
          FUNCTION_1(0);
        } catch (VAR_2) {}
    }
};