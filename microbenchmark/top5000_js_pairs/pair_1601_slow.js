const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        VAR_1[9999] = 0;
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) if (VAR_3 in VAR_1) VAR_2 += VAR_1[VAR_3];
    }
};