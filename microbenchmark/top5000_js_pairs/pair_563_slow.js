const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [];
          for (var VAR_2 = 0; VAR_2 < 10; VAR_2++) {
            VAR_1.push(VAR_2);
          }
          return VAR_1.join(", ");
        }
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          FUNCTION_1();
        }
    }
};