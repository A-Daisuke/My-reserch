const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_3 = new Float32Array(100000 * 4);
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push([VAR_3[VAR_2 * 4], VAR_3[VAR_2 * 4 + 1], VAR_3[VAR_2 * 4 + 2], VAR_3[VAR_2 * 4 + 3]]);
        }
    }
};