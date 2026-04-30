const Benchmark = {
    run: function() {
        var VAR_1 = new Array(2048);
        var VAR_2 = [[4, 5, 3], [3, 3], [2], []];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push.apply(VAR_1, VAR_2[VAR_3 & 3]);
        }
    }
};