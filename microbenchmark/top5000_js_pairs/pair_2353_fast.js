const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_4 = "";
          for (var VAR_5 = 0; VAR_5 < VAR_2; VAR_5++) {
            VAR_4 += VAR_1;
          }
          return VAR_4;
        }
        var VAR_3 = FUNCTION_1("W", 20000);
    }
};