const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: {
            KEY_2: {
              KEY_3: true,
              KEY_4: true,
              KEY_5: true,
            },
          },
        };
        var VAR_2 = false;
        var VAR_3;
        for (VAR_3 = 0; VAR_3 < 10000000; VAR_3++) {
          VAR_2 = VAR_1.KEY_1.KEY_2.KEY_3 || VAR_1.KEY_1.KEY_2.KEY_4 || VAR_1.KEY_1.KEY_2.KEY_5;
        }
    }
};