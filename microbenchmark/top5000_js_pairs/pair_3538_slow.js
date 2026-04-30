const Benchmark = {
    run: function() {
        VAR_1 = 16000;
        function FUNCTION_1(VAR_2) {
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3 += 1) {
            VAR_2.push(1);
          }
        }
        const VAR_4 = [];
        FUNCTION_1(VAR_4);
    }
};