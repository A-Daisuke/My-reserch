const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = new Float32Array(100000 * 4);
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push({
            KEY_1: VAR_2[VAR_3 * 4],
            KEY_2: VAR_2[VAR_3 * 4 + 1],
            KEY_3: VAR_2[VAR_3 * 4 + 2],
            KEY_4: VAR_2[VAR_3 * 4 + 3],
          });
        }
    }
};