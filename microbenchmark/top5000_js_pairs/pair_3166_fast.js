const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push(VAR_2);
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++) var VAR_6 = VAR_1[VAR_4] * VAR_1[VAR_4];
    }
};