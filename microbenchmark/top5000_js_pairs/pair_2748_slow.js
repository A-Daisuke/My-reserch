const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = 0;
          function FUNCTION_2(VAR_4, VAR_5) {
            if (VAR_4 === VAR_1 - 1 && VAR_5 === VAR_2 - 1) VAR_3++;
            else {
              if (VAR_4 < VAR_1 - 1) FUNCTION_2(VAR_4 + 1, VAR_5);
              if (VAR_5 < VAR_2 - 1) FUNCTION_2(VAR_4, VAR_5 + 1);
            }
          }
          FUNCTION_2(0, 0);
          return VAR_3;
        }
        FUNCTION_1(8, 8);
    }
};