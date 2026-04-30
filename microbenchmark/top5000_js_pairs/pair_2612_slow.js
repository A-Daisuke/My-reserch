const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "" + VAR_1,
            VAR_3 = 0,
            VAR_4 = 1;
          VAR_2.split("").forEach(function (VAR_5) {
            VAR_5 = parseInt(VAR_5);
            VAR_3 += VAR_5;
            VAR_4 *= VAR_5;
          });
          return VAR_3 === VAR_4;
        }
        for (var VAR_6 = 10; VAR_6 < 500; VAR_6++) {
          FUNCTION_1(VAR_6);
        }
    }
};