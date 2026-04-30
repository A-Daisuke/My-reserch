const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === 0) {
            return 1;
          } else {
            return VAR_1 * FUNCTION_1(VAR_1 - 1);
          }
        }
        console.log(FUNCTION_1(10000));
    }
};