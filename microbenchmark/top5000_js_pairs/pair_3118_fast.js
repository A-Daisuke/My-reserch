const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 1000; VAR_2 < VAR_3; VAR_2++) VAR_1.push(Math.random());
        for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_2 < VAR_3; VAR_2++) {
          VAR_1[VAR_2];
        }
    }
};