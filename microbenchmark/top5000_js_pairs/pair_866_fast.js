const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_9) {
          if (2 === VAR_9 || 3 === VAR_9) return true;
          if (2 > VAR_9 || 0 === VAR_9 % 2 || 0 === VAR_9 % 3) return false;
          for (var VAR_10 = 3; VAR_10 * VAR_10 <= VAR_9; VAR_10 += 2) {
            if (0 === VAR_9 % VAR_10) return false;
          }
          return true;
        }
        function FUNCTION_3(VAR_11) {
          var VAR_4 = 1,
            VAR_3 = 2;
          for (var VAR_12 = 3; VAR_4 < VAR_11; VAR_12 += 2) {
            if (FUNCTION_2(VAR_12)) {
              VAR_3 += VAR_12;
              VAR_4 += 1;
            }
          }
          return VAR_3;
        }
        console.log(FUNCTION_3(1000));
    }
};