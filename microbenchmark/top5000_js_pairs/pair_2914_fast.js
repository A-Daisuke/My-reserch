const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_6 = 0;
        for (var VAR_7 = 0, VAR_8 = VAR_1.length; VAR_2 < VAR_8; VAR_2++) {
          VAR_6 += VAR_1[VAR_2].KEY_1;
        }
    }
};