const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [1, 2, 3, 4];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push(Math.random());
        }
        for (var VAR_4 = 0, VAR_5 = VAR_2.length; VAR_3 < VAR_5; VAR_3++) {
          VAR_1.push(VAR_2[VAR_3]);
        }
    }
};