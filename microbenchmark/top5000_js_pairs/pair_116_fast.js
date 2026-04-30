const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: "0..?.." + VAR_2,
            KEY_3: VAR_2 * VAR_2,
          });
        }
        var VAR_5;
        for (var VAR_6 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_5 = VAR_1[VAR_2];
          VAR_5.VAR_4 = VAR_5.KEY_1 + VAR_5.KEY_1;
        }
    }
};