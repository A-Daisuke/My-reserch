const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          if (VAR_1.hasOwnProperty("bar")) {
            VAR_1.VAR_3 = VAR_2;
          } else {
            Object.defineProperty(VAR_1, "bar", {
              KEY_1: true,
              KEY_2: true,
              KEY_3: true,
              KEY_4: VAR_2,
            });
          }
        }
    }
};