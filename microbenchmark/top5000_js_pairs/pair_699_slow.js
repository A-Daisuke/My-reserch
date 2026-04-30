const Benchmark = {
    run: function() {
        VAR_1 = 1000001;
        function FUNCTION_1(VAR_2 = 5) {
          let VAR_3 = 0;
          for (let VAR_4 = VAR_2; VAR_4 > 1; VAR_4 -= 2) {
            for (let VAR_5 = 0; VAR_5 < 4; VAR_5++) {
              VAR_3 += VAR_4 * VAR_4 - (VAR_4 * VAR_5 - VAR_5);
            }
          }
          return VAR_3 + 1;
        }
        FUNCTION_1(VAR_1);
    }
};