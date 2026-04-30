const Benchmark = {
    run: function() {
        var VAR_1 = 54320;
        function FUNCTION_1(VAR_2) {
          var VAR_3 = 0;
          var VAR_4 = 0;
          var VAR_5 = 0;
          for (var VAR_6 = 0; VAR_6 < VAR_2 + 1; VAR_6++) {
            if (VAR_6 === 1) {
              VAR_5 = 1;
            } else {
              VAR_5 = VAR_3 + VAR_4;
            }
            VAR_3 = VAR_4;
            VAR_4 = VAR_5;
          }
          return VAR_5;
        }
        FUNCTION_1(VAR_1);
    }
};