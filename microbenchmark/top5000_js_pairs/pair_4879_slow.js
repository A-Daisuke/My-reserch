const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        var VAR_3;
        while (--VAR_2) VAR_1.push(VAR_2 + "a");
        VAR_3 = [];
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++) {
          VAR_3.push(VAR_1[VAR_4]);
        }
    }
};