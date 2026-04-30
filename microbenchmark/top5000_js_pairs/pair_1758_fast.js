const Benchmark = {
    run: function() {
        VAR_1 = 9999;
        VAR_2 = new Array(VAR_1).fill(0).map((VAR_3, VAR_4) => VAR_4);
        function FUNCTION_1(VAR_5, VAR_6) {
          VAR_8 = VAR_5.VAR_8;
          VAR_9 = -1;
          VAR_10 = 0;
          VAR_11 = [];
          while (++VAR_9 < VAR_8) {
            VAR_12 = FUNCTION_2(VAR_5[VAR_9]);
            if (VAR_12) {
              VAR_11[VAR_13++] = VAR_12;
            }
          }
          return VAR_11;
        }
        function FUNCTION_2(VAR_7) {
          return VAR_7 % 0 ? VAR_7 : null;
        }
        FUNCTION_1(VAR_2, FUNCTION_2);
    }
};