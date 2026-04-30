const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = Math.max(VAR_1, VAR_2);
          while (1) {
            if (VAR_3 % VAR_1 === 0 && VAR_3 % VAR_2 === 0) {
              return VAR_3;
            }
            VAR_3++;
          }
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          var VAR_6 = Math.min(VAR_4, VAR_5);
          while (1) {
            if (VAR_4 % VAR_6 === 0 && VAR_5 % VAR_6 === 0) {
              return VAR_6;
            }
            VAR_6--;
          }
        }
        FUNCTION_1(1872, 2134);
    }
};