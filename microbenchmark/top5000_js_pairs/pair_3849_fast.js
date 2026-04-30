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
        var VAR_5 = [];
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_2 < VAR_4; VAR_2++) {
          VAR_5.push(VAR_1[VAR_2].KEY_1);
        }
    }
};