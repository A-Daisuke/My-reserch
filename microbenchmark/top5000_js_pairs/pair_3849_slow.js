const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++)
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: VAR_2,
            KEY_3: VAR_2,
            KEY_4: VAR_2,
            KEY_5: VAR_2,
          });
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_2 < VAR_4; VAR_2++) {
          delete VAR_1.KEY_2;
          delete VAR_1.KEY_3;
          delete VAR_1.KEY_4;
          delete VAR_1.KEY_5;
        }
    }
};