const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          if (VAR_1 === 0 || VAR_2 === 0) {
            return 0;
          }
          var VAR_3 = (VAR_1 < 0 && VAR_2 >= 0) || (VAR_1 >= 0 && VAR_2 < 0) ? true : false;
          var VAR_4 = 0;
          VAR_1 = Math.abs(VAR_1);
          VAR_2 = Math.abs(VAR_2);
          for (var VAR_5 = 1; VAR_5 <= Math.abs(VAR_1); VAR_5++) {
            VAR_4 += VAR_2;
          }
          if (VAR_3) {
            VAR_4 *= -1;
          }
          return VAR_4;
        };
        for (VAR_5 = 0; VAR_5 < 100000; VAR_5++) {
          FUNCTION_1(5, 10);
        }
    }
};