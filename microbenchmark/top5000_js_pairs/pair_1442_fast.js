const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_6) {
          var VAR_7 = [];
          for (var VAR_8 = 2; VAR_6 > 0; VAR_8++) {
            if (FUNCTION_2(VAR_8)) {
              VAR_7.push(VAR_8);
              --VAR_6;
            }
          }
          return VAR_7;
        }
        function FUNCTION_2(VAR_9) {
          var VAR_10 = Math.sqrt(VAR_9);
          for (var VAR_11 = 2; VAR_11 <= VAR_10; VAR_11++) {
            if (VAR_9 % VAR_11 === 0) return false;
          }
          return true;
        }
        FUNCTION_1(100);
    }
};