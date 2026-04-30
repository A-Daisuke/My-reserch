const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_3 = 0,
            VAR_4 = 1;
          (function rec(VAR_7) {
            var VAR_8 = VAR_1 % 10;
            VAR_3 += VAR_8;
            VAR_4 *= VAR_8;
            VAR_1 = (VAR_1 - VAR_8) / 10;
            if (VAR_1 >= 1) {
              rec(VAR_1);
            }
          })(VAR_1);
          return VAR_3 === VAR_4;
        }
        for (var VAR_6 = 10; VAR_6 < 500; VAR_6++) {
          FUNCTION_1(VAR_6);
        }
    }
};