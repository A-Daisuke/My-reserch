const Benchmark = {
    run: function() {
        var VAR_1 = {
            KEY_1: 1,
            KEY_2: 2,
            KEY_3: 3,
          },
          VAR_2 = {
            KEY_4: 1,
            KEY_5: 2,
            KEY_6: 3,
          };
        var VAR_3 = 1;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          if (JSON.stringify(VAR_1) === JSON.stringify(VAR_1)) {
            VAR_3++;
          }
        }
    }
};