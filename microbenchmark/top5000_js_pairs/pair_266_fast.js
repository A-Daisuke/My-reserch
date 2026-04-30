const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = null;
        var VAR_5 = VAR_1.length;
        for (var VAR_6 = 0; VAR_2 < VAR_5; VAR_2++) {
          VAR_3 = VAR_1[VAR_2];
        }
    }
};