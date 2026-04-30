const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 25000; VAR_2++) VAR_1.push(1);
        for (var VAR_3 in VAR_1) {
          VAR_4 = VAR_1[VAR_2];
        }
    }
};