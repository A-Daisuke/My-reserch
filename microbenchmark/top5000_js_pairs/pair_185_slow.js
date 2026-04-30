const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return !(VAR_1 % 2 === 0) ? true : false;
        }
        function FUNCTION_2(VAR_2) {
          if (!FUNCTION_1(VAR_2)) {
            return false;
          } else {
            var VAR_3 = true;
            for (var VAR_4 = 3; VAR_4 < VAR_2 / 2; VAR_4++) {
              if (VAR_2 % VAR_4 === 0) {
                VAR_3 = false;
                break;
              }
            }
            return VAR_3;
          }
        }
        for (var VAR_5 = 0; VAR_5 <= 10000; VAR_5++) {
          FUNCTION_2(VAR_5);
        }
    }
};