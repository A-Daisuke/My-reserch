const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1 = VAR_1.join(",");
        var VAR_3 = VAR_1.split(",");
        for (var VAR_4 = 0, VAR_5 = VAR_3.length; VAR_2 < VAR_5; VAR_2++) {
          VAR_3[VAR_6] = parseInt(VAR_3[VAR_2], 10);
        }
    }
};