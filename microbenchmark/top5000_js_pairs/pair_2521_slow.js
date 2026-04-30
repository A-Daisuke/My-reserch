const Benchmark = {
    run: function() {
        new Array(10000).fill(null).map(FUNCTION_1);
        function FUNCTION_1(VAR_1, VAR_2) {
          function FUNCTION_2(VAR_3) {
            return `${VAR_1} ${VAR_2}`;
          }
          return FUNCTION_2(VAR_1);
        }
    }
};