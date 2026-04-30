const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[1000000] = true;
        VAR_1[10000] = true;
        VAR_1[500] = true;
        var VAR_2 = 0;
        VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) if (VAR_1.hasOwnProperty(VAR_3)) VAR_2++;
    }
};