const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 % 1 === 0) return true;
          return false;
        }
        function FUNCTION_2(VAR_2, VAR_3) {
          var VAR_4;
          for (VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
            VAR_3(VAR_4);
          }
        }
        FUNCTION_2(1000000, FUNCTION_1);
    }
};