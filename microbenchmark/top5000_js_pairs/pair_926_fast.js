const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2;
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
            VAR_2 = [];
            for (var VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
              VAR_2.push(0);
            }
            VAR_3.push(VAR_2);
          }
          return VAR_3;
        }
        FUNCTION_1(32);
    }
};