const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_4 = VAR_1 + VAR_2;
          var VAR_5 = VAR_2 + VAR_3;
          return VAR_4 + VAR_5;
        }
        function FUNCTION_2(VAR_6, VAR_7, VAR_8) {
          return (function (VAR_9, VAR_10) {
            return VAR_9 + VAR_10;
          })(VAR_6 + VAR_7, VAR_7 + VAR_8);
        }
        for (var VAR_11 = 0; VAR_11 < 10000; VAR_11++) {
          FUNCTION_2(1, 2, 3);
        }
    }
};