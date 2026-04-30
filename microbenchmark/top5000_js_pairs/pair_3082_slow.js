const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({
            KEY_1: 4 * Math.cos(VAR_2) - 5 * Math.sin(VAR_2),
            KEY_2: 2 * Math.sin(VAR_2) + 7 * Math.cos(VAR_2),
          });
        }
    }
};