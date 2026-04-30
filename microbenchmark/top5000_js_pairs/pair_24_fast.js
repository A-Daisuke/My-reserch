const Benchmark = {
    run: function() {
        console.VAR_3 = console.FUNCTION_1;
        console.FUNCTION_1 = function (VAR_4, VAR_5) {
          if (VAR_4) return;
          console.VAR_3(VAR_4, VAR_5);
        };
        VAR_1 = console;
        for (var VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          VAR_1.FUNCTION_1(true);
        }
    }
};