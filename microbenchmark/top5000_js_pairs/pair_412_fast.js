const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[1000000] = true;
        VAR_1[10000] = true;
        VAR_1[500] = true;
        var VAR_2 = 0;
        VAR_2 = 0;
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) if (VAR_1.hasOwnProperty(VAR_4)) VAR_2++;
    }
};