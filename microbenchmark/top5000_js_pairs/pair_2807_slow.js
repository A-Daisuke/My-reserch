const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push(Math.round(Math.random() * 10000).toString());
          VAR_2.push(Math.round(Math.random() * 10000).toString(16));
        }
        for (var VAR_4 = 0; VAR_3 < VAR_2.length; VAR_3++) var VAR_5 = parseInt(VAR_2[VAR_3], 16);
    }
};