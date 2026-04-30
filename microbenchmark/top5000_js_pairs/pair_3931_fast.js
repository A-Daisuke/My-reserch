const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: [] };
        var VAR_2 = { KEY_2: [] };
        if (VAR_2.KEY_1) for (var VAR_3 = 0, VAR_4 = VAR_2.KEY_1.length; VAR_3 < VAR_4; ++VAR_3) VAR_2.KEY_1[VAR_3]++;
    }
};