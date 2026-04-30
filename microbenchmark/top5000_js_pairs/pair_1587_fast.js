const Benchmark = {
    run: function() {
        function FUNCTION_4(VAR_7) {
          var VAR_8 = [];
          for (var VAR_9 = 0; VAR_9 < VAR_7; VAR_9++) {
            VAR_8.push(VAR_9);
          }
          return VAR_8;
        }
        function FUNCTION_3(VAR_4) {
          for (VAR_5 = 0, VAR_6 = []; VAR_9 < VAR_4; VAR_8.push(VAR_9++)) {}
          return VAR_8;
        }
        FUNCTION_4(10000);
    }
};