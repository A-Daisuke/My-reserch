const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        VAR_1[9999] = 0;
        for (var VAR_5 in VAR_1) VAR_2 += VAR_1[VAR_5];
    }
};