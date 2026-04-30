const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          throw VAR_1;
        }
        function FUNCTION_2(VAR_2) {
          try {
            FUNCTION_3(VAR_2, FUNCTION_1);
          } catch (VAR_3) {
            return VAR_3;
          }
        }
        function FUNCTION_3(VAR_4, VAR_5) {
          if (VAR_4 === 0) {
            FUNCTION_1(VAR_4);
          } else {
            FUNCTION_3(VAR_4 - 1, function (VAR_6) {
              FUNCTION_1(VAR_4 * VAR_6);
            });
          }
        }
        FUNCTION_2(100);
    }
};