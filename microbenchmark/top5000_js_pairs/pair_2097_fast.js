const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          let VAR_2;
          let VAR_3 = 0;
          let VAR_4 = 1,
            VAR_5 = 1;
          while (VAR_3 < VAR_1 - 1) {
            VAR_2 = VAR_4 + VAR_5;
            VAR_4 = VAR_5;
            VAR_5 = VAR_2;
            VAR_3++;
          }
          return VAR_2;
        }
        FUNCTION_1(20);
    }
};