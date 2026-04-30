const Benchmark = {
    run: function() {
        console.VAR_2 = console.FUNCTION_1;
        console.FUNCTION_1 = function (VAR_3, VAR_4) {
          if (VAR_3) return;
          console.VAR_2(VAR_3, VAR_4);
        };
        for (var VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          console.FUNCTION_1(true);
        }
    }
};