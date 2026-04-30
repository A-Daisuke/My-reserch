const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = 1000;
        for (VAR_1 = 0; VAR_1 < VAR_3; VAR_1++) {
          VAR_2.push([Math.random(), Math.random()]);
        }
        var VAR_4 = [];
        for (VAR_1 = 0; VAR_1 < VAR_3; VAR_1++) {
          VAR_4.push(Math.hypot(VAR_2[VAR_1][0], VAR_2[VAR_1][1]));
        }
    }
};