const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 1000000; VAR_2 < VAR_3; VAR_2++) {
          VAR_1.push(Math.random());
        }
        var VAR_4 = 0,
          VAR_5 = 0.5,
          VAR_6 = VAR_1.VAR_3;
        do {
          VAR_4 += (VAR_1[VAR_2] - VAR_5) * (VAR_1[VAR_2] - VAR_5);
        } while (--VAR_2);
    }
};