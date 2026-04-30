const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          _function: while (true) {
            var VAR_7 = VAR_1,
              VAR_8 = VAR_2;
            if (VAR_8 === undefined) VAR_8 = 1;
            if (VAR_7 > 1) {
              VAR_1 = VAR_7 - 1;
              VAR_2 = VAR_8 * VAR_7;
              continue _function;
            } else {
              return VAR_8;
            }
          }
        }
        function FUNCTION_2(VAR_3) {
          return VAR_3 > 1 ? FUNCTION_2(VAR_3 - 1) * VAR_3 : 1;
        }
        function FUNCTION_3(VAR_4) {
          var VAR_5 = 1;
          for (var VAR_6 = 2; VAR_6 < VAR_4; VAR_6++) {
            VAR_5 *= VAR_6;
          }
          return VAR_5;
        }
        FUNCTION_1(1000);
    }
};