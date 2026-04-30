const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return function (VAR_9, VAR_10, VAR_11, VAR_12, VAR_13, VAR_14, VAR_15, VAR_16) {
            VAR_1(VAR_9, VAR_10, VAR_11, VAR_12, VAR_13, VAR_14, VAR_15, VAR_16);
          };
        }
        function FUNCTION_2(VAR_2, VAR_3, VAR_4, VAR_5, VAR_6, VAR_7) {
          return VAR_2 + VAR_3 + VAR_4 + VAR_5 + VAR_6 + VAR_7;
        }
        for (var VAR_8 = 0; VAR_8 < 1000; VAR_8++) FUNCTION_1(FUNCTION_2)(VAR_8, VAR_8, VAR_8, VAR_8, VAR_8, VAR_8);
    }
};