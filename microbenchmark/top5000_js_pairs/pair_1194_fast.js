const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1.replace(VAR_2, "");
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          return VAR_1.substring(VAR_2.length);
        }
        function FUNCTION_3() {
          var VAR_5 = [],
            VAR_7 = 50000,
            VAR_8 = -1;
          while (++VAR_8 < VAR_7) {
            VAR_5.push(undefined);
          }
        }
        FUNCTION_3();
    }
};