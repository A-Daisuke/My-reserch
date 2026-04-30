const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_5 = {
            KEY_1: 0,
            KEY_2: 0,
          };
          var VAR_3 = VAR_5.KEY_1;
          var VAR_4 = VAR_5.KEY_2;
        }
    }
};