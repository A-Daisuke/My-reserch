const Benchmark = {
    run: function() {
        var VAR_8 = 0;
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_8 += VAR_1[VAR_2];
        }
    }
};