const Benchmark = {
    run: function() {
        "use strict";
        function FUNCTION_1() {
          this.FUNCTION_2 = function (VAR_1, VAR_2) {
            return VAR_1 + VAR_2;
          };
          this.FUNCTION_3 = function (VAR_3) {
            return VAR_3++;
          };
        }
        for (var VAR_4 = 0; VAR_4 < 9999; VAR_4++) {
          var VAR_5 = new FUNCTION_1(),
            VAR_6 = new FUNCTION_1(),
            VAR_7 = VAR_5.FUNCTION_2(123, 456) * VAR_6.FUNCTION_3(789);
        }
    }
};