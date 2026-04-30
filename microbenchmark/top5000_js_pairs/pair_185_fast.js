const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2) {
          for (var VAR_4 = 2; VAR_4 <= Math.sqrt(VAR_2); VAR_4++) {
            if (VAR_2 % VAR_4 === 0) {
              return false;
            }
          }
          return true;
        }
        for (var VAR_5 = 0; VAR_5 <= 10000; VAR_5++) {
          FUNCTION_2(VAR_5);
        }
    }
};