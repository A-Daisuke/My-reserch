const Benchmark = {
    run: function() {
        var VAR_1 = 30;
        function FUNCTION_1(VAR_2) {
          if (VAR_2 === 1 || VAR_2 === 0) {
            return VAR_2;
          }
          var VAR_3 = 0;
          var VAR_4 = 0;
          var VAR_5 = 0;
          for (var VAR_6 = 1; VAR_6 < VAR_2; VAR_6++) {
            VAR_5 = VAR_3 + VAR_4;
            VAR_3 = VAR_4;
            VAR_4 = VAR_5;
          }
          return VAR_5;
        }
        FUNCTION_1(VAR_1);
    }
};