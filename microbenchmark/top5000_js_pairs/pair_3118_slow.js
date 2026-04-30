const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 1000; VAR_2 < VAR_3; VAR_2++) VAR_1.push(Math.random());
        for (var VAR_4 in VAR_1) {
          VAR_1[VAR_2];
        }
    }
};