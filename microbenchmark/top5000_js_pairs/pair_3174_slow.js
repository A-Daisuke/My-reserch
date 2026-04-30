const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.replace(/(.)\1*/g, function (VAR_2, VAR_3) {
            return VAR_2.length + VAR_3;
          });
        }
        function FUNCTION_2(VAR_4) {
          for (var VAR_5 = 0, VAR_6 = ""; VAR_5 < VAR_4; VAR_5++) {
            VAR_6 = FUNCTION_1(VAR_6 + VAR_5.toString());
          }
          return VAR_6;
        }
        FUNCTION_2(10);
    }
};