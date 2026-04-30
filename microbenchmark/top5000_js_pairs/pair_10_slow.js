const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 500000; VAR_2++) VAR_1.push(VAR_2);
        for (var VAR_3 in VAR_1) VAR_1[VAR_3];
    }
};