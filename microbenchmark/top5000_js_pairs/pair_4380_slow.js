const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1) {
          var VAR_2 = 0,
            VAR_3 = 1,
            VAR_4 = 0,
            VAR_5 = [0, 1],
            VAR_6 = 1;
          do VAR_5.push((VAR_2 = VAR_4 + VAR_3)), (VAR_4 = VAR_3), (VAR_3 = VAR_2);
          while (++VAR_6 < VAR_1);
          return VAR_2;
        };
        FUNCTION_1(1000);
    }
};