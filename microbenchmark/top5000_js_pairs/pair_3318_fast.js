const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push(Math.random());
        }
        for (var VAR_5 = 0, VAR_6 = VAR_2.length; VAR_5 < VAR_6; VAR_5++) {
          VAR_1 += VAR_2[VAR_5];
        }
    }
};