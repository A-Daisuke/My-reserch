const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1.substring(VAR_2.length);
        }
        function FUNCTION_2() {
          var VAR_3 = [],
            VAR_4 = 50000,
            VAR_5 = -1;
          while (++VAR_5 < VAR_4) {
            VAR_3.push(undefined);
          }
        }
        function FUNCTION_3() {
          var VAR_6 = [],
            VAR_7 = new Array(50000);
          VAR_3.concat.apply(VAR_6, VAR_7);
        }
        FUNCTION_2();
    }
};