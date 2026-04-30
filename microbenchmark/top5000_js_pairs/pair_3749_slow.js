const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          var VAR_3 = VAR_1 + 1;
          for (var VAR_4 = 1; VAR_4 < VAR_1; VAR_4++) {
            var VAR_5 = parseFloat((1 + Math.sqrt(5)) * 0.5);
            var VAR_6 = parseFloat(
              (Math.pow(VAR_5, VAR_4) - Math.pow(1 - VAR_5, VAR_4)) / Math.sqrt(5),
            );
            VAR_2 = parseFloat(Math.round(VAR_6));
          }
          return VAR_2;
        }
        FUNCTION_1(100);
    }
};