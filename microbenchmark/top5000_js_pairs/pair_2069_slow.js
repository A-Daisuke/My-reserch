const Benchmark = {
    run: function() {
        (function () {
          for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
            var VAR_2 = {
              0: "Hello",
              1: "World",
            };
            var VAR_3 = VAR_2[VAR_1 % 2];
          }
        })();
    }
};