const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          while (--VAR_1) {
            VAR_2.push(0);
          }
          return VAR_2;
        }
        function FUNCTION_2(VAR_3) {
          var VAR_4 = new Array(VAR_3);
          while (--VAR_3) {
            VAR_2[VAR_5] = 0;
          }
          return VAR_4;
        }
        FUNCTION_1(100);
    }
};