const Benchmark = {
    run: function() {
        var VAR_2 = [];
        function FUNCTION_1(VAR_1) {
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2.push(0);
            FUNCTION_1(VAR_1 - 1);
            VAR_2.pop();
          }
        }
        FUNCTION_1(5);
    }
};