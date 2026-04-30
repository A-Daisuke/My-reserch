const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          for (var VAR_2 = 2; VAR_1 < 2 * VAR_2; ++VAR_2) {
            if (VAR_1 % VAR_2 === 0) return false;
          }
          return true;
        }
        function FUNCTION_2(VAR_3) {
          var VAR_4 = 0;
          for (var VAR_5 = 2; VAR_5 <= VAR_3; ++VAR_5) {
            if (FUNCTION_1(VAR_5)) ++VAR_4;
          }
          return VAR_4;
        }
        FUNCTION_2(100000);
    }
};