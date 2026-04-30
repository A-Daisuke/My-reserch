const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          "use asm";
          var VAR_2 = 0;
          function FUNCTION_1(VAR_3) {
            VAR_3 = +VAR_3;
            for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4 += 3) {
              VAR_2 += VAR_4 + 1;
              VAR_2 += VAR_4 + 2;
              VAR_2 += VAR_4 + 3;
            }
            return VAR_2;
          }
          return { KEY_1: FUNCTION_1 };
        })().KEY_1;
        FUNCTION_2 = function (VAR_5) {
          var VAR_6;
          for (var VAR_7 = 0; VAR_7 < VAR_5; ) {
            VAR_2 += VAR_7++;
            VAR_2 += VAR_7++;
            VAR_2 += VAR_7++;
          }
          return VAR_2;
        };
        VAR_1(9999);
    }
};