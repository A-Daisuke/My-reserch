const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: 1,
          KEY_2: 4,
          KEY_3: 2.3,
        };
        var VAR_2 = {
          KEY_4: 1,
          KEY_5: 4,
          KEY_6: 2.3,
        };
        Object.freeze(VAR_2);
        var VAR_3 = 0;
        for (var VAR_4 = 0, VAR_5 = 100; VAR_4 < VAR_5; VAR_4++) {
          for (var VAR_6 in VAR_1) VAR_3 += VAR_1[VAR_6];
        }
    }
};