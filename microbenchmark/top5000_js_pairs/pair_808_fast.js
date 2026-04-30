const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        function FUNCTION_1() {
          try {
            for (var VAR_2 = 0; VAR_2 < VAR_1; ++VAR_2) {
              window.VAR_3 = Math.random();
            }
          } catch (VAR_4) {
            var VAR_5 = VAR_4.stack;
          }
        }
        FUNCTION_1();
    }
};