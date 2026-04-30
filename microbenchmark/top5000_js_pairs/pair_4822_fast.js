const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1) {
          var VAR_4 = 0,
            VAR_5 = 1,
            VAR_6 = 0,
            VAR_3 = [0, 1],
            VAR_7 = 1;
          do (VAR_4 = VAR_6 + VAR_5), (VAR_6 = VAR_5), (VAR_5 = VAR_4);
          while (++VAR_7 < VAR_1);
          return VAR_4;
        };
        FUNCTION_1(1000);
    }
};