const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push(VAR_2);
        for (r in VAR_1) var VAR_3 = VAR_1[r] * VAR_1[r];
    }
};