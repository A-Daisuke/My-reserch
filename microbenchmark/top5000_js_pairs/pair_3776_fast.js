const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_3 = [];
          for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
            VAR_3.push(VAR_1);
          }
          return VAR_3;
        }
        for (var VAR_2 of FUNCTION_1()) {
        }
    }
};