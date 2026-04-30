const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_5;
          var VAR_6 = [Math.random(), Math.random()];
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
            VAR_5 = VAR_2;
            VAR_5 = VAR_5 + VAR_2;
          }
        }
        FUNCTION_1();
    }
};