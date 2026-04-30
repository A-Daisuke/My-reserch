const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = [];
        for (var VAR_6 = 0; VAR_6 < VAR_1.length; VAR_6++) {
          VAR_3.push({ KEY_1: VAR_6 });
        }
    }
};