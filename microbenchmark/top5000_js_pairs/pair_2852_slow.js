const Benchmark = {
    run: function() {
        VAR_1 = [Math.random(), Math.random()];
        function FUNCTION_1() {
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
            VAR_3 = VAR_2;
            VAR_4 = VAR_3 + VAR_2;
            VAR_1.push(VAR_3);
          }
        }
        FUNCTION_1();
    }
};