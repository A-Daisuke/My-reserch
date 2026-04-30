const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[1000000] = true;
        VAR_1[10000] = true;
        VAR_1[500] = true;
        var VAR_2 = 0;
        VAR_2 = 0;
        VAR_4 = VAR_1.length;
        for (var VAR_5 = 0; VAR_5 < VAR_4; VAR_5++) if (undefined !== VAR_1[VAR_5]) VAR_2++;
    }
};