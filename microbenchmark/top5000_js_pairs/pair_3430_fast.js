const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_3) {
          if (VAR_1 === 1) {
            VAR_3.push(1);
            return VAR_3;
          } else if (FUNCTION_2(VAR_1)) {
            VAR_3.push(VAR_1);
            return FUNCTION_1(VAR_1 / 2, VAR_3);
          } else {
            VAR_3.push(VAR_1);
            return FUNCTION_1(3 * VAR_1 + 1, VAR_3);
          }
        }
        function FUNCTION_2(VAR_2) {
          return VAR_2 % 2 == 0 ? true : false;
        }
        FUNCTION_1(1000001, []);
    }
};