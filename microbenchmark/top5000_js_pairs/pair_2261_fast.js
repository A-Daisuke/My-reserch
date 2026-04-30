const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 < 3) {
            return 1;
          }
          var VAR_2 = 1;
          var VAR_3 = 1;
          var VAR_4 = 0;
          for (var VAR_5 = 0; VAR_5 < VAR_1; ++VAR_5) {
            VAR_2 = VAR_3;
            VAR_3 = VAR_4;
            VAR_4 = VAR_2 + VAR_3;
          }
          return VAR_4;
        }
        FUNCTION_1(20);
    }
};