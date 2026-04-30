const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: [] };
        for (var VAR_2 = 0, VAR_3 = VAR_1.KEY_1.length; VAR_2 < VAR_3; VAR_2++) VAR_1.KEY_1[VAR_2]++;
    }
};