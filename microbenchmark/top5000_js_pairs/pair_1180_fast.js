const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = -1,
            VAR_3 = 0,
            VAR_4 = 1,
            VAR_6;
          while (++VAR_2 < VAR_1) {
            VAR_6 = VAR_3;
            VAR_3 = VAR_3 + VAR_4;
            VAR_4 = VAR_6;
          }
          return VAR_3;
        }
        var VAR_5 = 1000;
        while (VAR_5--) FUNCTION_1(1000);
    }
};