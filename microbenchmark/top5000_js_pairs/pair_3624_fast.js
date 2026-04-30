const Benchmark = {
    run: function() {
        var VAR_5 = { KEY_1: 1 };
        var VAR_6 = { KEY_2: 1 };
        for (var VAR_7 = 0, VAR_8 = 0; VAR_7 < 1000; VAR_7++) {
          if (VAR_7 % 2) {
            VAR_8 += VAR_5.KEY_2 || 42;
          } else {
            VAR_8 += VAR_6.KEY_1 || 42;
          }
        }
    }
};