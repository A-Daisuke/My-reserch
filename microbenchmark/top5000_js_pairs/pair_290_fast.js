const Benchmark = {
    run: function() {
        function FUNCTION_3(VAR_7, VAR_8) {
          if (VAR_7 % VAR_8 === 0) {
            return VAR_8;
          }
          return FUNCTION_3(VAR_8, VAR_7 % VAR_8);
        }
        function FUNCTION_4(VAR_9, VAR_10) {
          return (VAR_9 * VAR_10) / FUNCTION_3(VAR_9, VAR_10);
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
        FUNCTION_4(1872, 2134);
    }
};