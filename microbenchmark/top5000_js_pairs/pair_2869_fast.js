const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_6 = 0;
        for (var VAR_7 = VAR_1.length - 1; VAR_7 >= 0; VAR_7--) {
          VAR_6 += VAR_1[VAR_7].KEY_1;
        }
    }
};