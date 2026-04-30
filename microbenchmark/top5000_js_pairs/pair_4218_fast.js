const Benchmark = {
    run: function() {
        VAR_1 = "test";
        VAR_2 = 123;
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          var VAR_9 = {
            KEY_1: VAR_1,
            KEY_2: VAR_2,
          };
        }
    }
};