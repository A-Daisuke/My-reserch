const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          function FUNCTION_2(VAR_2, VAR_3) {
            if (VAR_2 == VAR_1) {
              return VAR_3;
            } else {
              VAR_2 = VAR_2 + 1;
              return FUNCTION_2(VAR_2, VAR_3.concat(["n:" + VAR_2]));
            }
          }
          return FUNCTION_2(0, []);
        }
        FUNCTION_1(100);
    }
};