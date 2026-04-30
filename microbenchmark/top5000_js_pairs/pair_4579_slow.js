const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2.push(0);
            FUNCTION_1(VAR_1 - 1);
            VAR_2.pop();
          }
        }
        FUNCTION_1(5);
    }
};