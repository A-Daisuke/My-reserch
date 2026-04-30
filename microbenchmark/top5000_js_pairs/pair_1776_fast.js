const Benchmark = {
    run: function() {
        var VAR_1 = 50000,
          VAR_2 = "a";
        function FUNCTION_2(VAR_5, VAR_6) {
          while (VAR_2.length < VAR_1) VAR_2 += VAR_2;
          return VAR_2.slice(0, VAR_1);
        }
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_7 = VAR_2;
          for (var VAR_8 = 1; VAR_8 < VAR_1; VAR_8++) {
            VAR_7 += VAR_2;
          }
          return VAR_7;
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};