const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
            VAR_3.push(VAR_1);
          }
          return VAR_3;
        }
        FUNCTION_1(1, 10000);
    }
};