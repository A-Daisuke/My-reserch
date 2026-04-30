const Benchmark = {
    run: function() {
        VAR_1 = 1000001;
        function FUNCTION_1(VAR_6) {
          if (VAR_6 % 2 === 0) return;
          let VAR_3 = 0;
          while (VAR_6 > 2) {
            const VAR_7 = VAR_6 * VAR_6;
            VAR_3 += (VAR_7 + (VAR_7 - (VAR_6 - 1) * 3)) * 2;
            VAR_6 -= 2;
          }
          return VAR_3 + 1;
        }
        FUNCTION_1(VAR_1);
    }
};